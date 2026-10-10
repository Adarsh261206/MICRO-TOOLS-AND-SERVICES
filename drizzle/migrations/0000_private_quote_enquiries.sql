CREATE TABLE public.enquiries (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 enquiry_number text NOT NULL UNIQUE,
 submission_key uuid NOT NULL UNIQUE,
 full_name text NOT NULL, company_name text NOT NULL, email text NOT NULL, phone text NOT NULL,
 industry text NOT NULL DEFAULT '', requirement_type text NOT NULL, material text NOT NULL DEFAULT '',
 quantity integer NOT NULL, delivery_timeline text NOT NULL DEFAULT '', technical_requirements text NOT NULL,
 attachment_path text, attachment_name text, attachment_type text,
 consent boolean NOT NULL, status text NOT NULL DEFAULT 'new',
 created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX enquiries_created_idx ON public.enquiries(created_at DESC);
CREATE TABLE public.enquiry_rate_limits (key text PRIMARY KEY, attempts integer NOT NULL DEFAULT 1, window_start timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.enquiry_rate_limits TO service_role;
ALTER TABLE public.enquiry_rate_limits ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.consume_enquiry_limit(rate_key text) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE hits integer;
BEGIN
INSERT INTO public.enquiry_rate_limits(key) VALUES (rate_key)
ON CONFLICT (key) DO UPDATE SET attempts = CASE WHEN enquiry_rate_limits.window_start < now() - interval '1 hour' THEN 1 ELSE enquiry_rate_limits.attempts + 1 END,
window_start = CASE WHEN enquiry_rate_limits.window_start < now() - interval '1 hour' THEN now() ELSE enquiry_rate_limits.window_start END
RETURNING attempts INTO hits;
RETURN hits <= 5;
END; $$;
REVOKE ALL ON FUNCTION public.consume_enquiry_limit(text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_enquiry_limit(text) TO service_role;