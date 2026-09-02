-- Early-access signups for the IOFitness public site.
-- Optional: run this once in the Neon SQL editor.
-- The app also creates this table automatically on first signup.

CREATE TABLE IF NOT EXISTS early_access_signups (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  goal TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
