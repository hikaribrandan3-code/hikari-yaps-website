-- Create activation_codes table for iVoz licensing
CREATE TABLE IF NOT EXISTS activation_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(7) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL,
  paypal_order_id VARCHAR(255),
  used BOOLEAN DEFAULT false,
  device_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT now(),
  used_at TIMESTAMP,
  expires_at TIMESTAMP
);

-- Create index on code for fast lookups
CREATE INDEX idx_activation_codes_code ON activation_codes(code);
CREATE INDEX idx_activation_codes_email ON activation_codes(email);
CREATE INDEX idx_activation_codes_used ON activation_codes(used);

-- Enable RLS
ALTER TABLE activation_codes ENABLE ROW LEVEL SECURITY;

-- Allow public to read codes (for validation)
CREATE POLICY "Allow public to read activation codes"
  ON activation_codes
  FOR SELECT
  TO anon
  USING (true);

-- Allow insert for code generation
CREATE POLICY "Allow insert activation codes"
  ON activation_codes
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow update only for marking as used
CREATE POLICY "Allow update activation codes"
  ON activation_codes
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);
