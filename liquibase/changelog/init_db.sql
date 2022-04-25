--liquibase formatted sql
--changeset joskar.hernandez:1:1 context:dev,prod,test
--comment claim module tables
-- Drop table
-- DROP TABLE public.tuten_document_type;
CREATE TABLE public.tuten_document_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_document_type_name_key UNIQUE (name),
  CONSTRAINT tuten_document_type_pkey PRIMARY KEY (id)
);

-- public.tuten_accounts_type definition
-- Drop table
-- DROP TABLE public.tuten_accounts_type;
CREATE TABLE public.tuten_accounts_type (
  id bigserial NOT NULL,
  "name" varchar(100) NOT NULL,
  active bool NOT NULL DEFAULT false,
  creation_date timestamp NOT NULL DEFAULT now(),
  business_unit_uuid uuid NULL,
  CONSTRAINT tuten_accounts_type_pk PRIMARY KEY (id)
);

-- public.tuten_action_type definition
-- Drop table
-- DROP TABLE public.tuten_action_type;
CREATE TABLE public.tuten_action_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_action_type_pkey PRIMARY KEY (id)
);

-- public.tuten_bank definition
-- Drop table
-- DROP TABLE public.tuten_bank;
CREATE TABLE public.tuten_bank (
  id bigserial NOT NULL,
  "name" varchar(100) NOT NULL,
  active bool NOT NULL DEFAULT false,
  creation_date timestamp NOT NULL DEFAULT now(),
  sura_id text NOT NULL DEFAULT '' :: text,
  business_unit_uuid uuid NULL,
  CONSTRAINT tuten_bank_pk PRIMARY KEY (id)
);


-- public.tuten_beneficiary_type definition
-- Drop table
-- DROP TABLE public.tuten_beneficiary_type;
CREATE TABLE public.tuten_beneficiary_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_beneficiary_type_pkey PRIMARY KEY (id)
);

-- public.tuten_claim_status definition
-- Drop table
-- DROP TABLE public.tuten_claim_status;
CREATE TABLE public.tuten_claim_status (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_claim_status_name_bu_key UNIQUE (name, business_unit_uuid),
  CONSTRAINT tuten_claim_status_pkey PRIMARY KEY (id)
);

-- public.tuten_claim_sub_typification definition
-- Drop table
-- DROP TABLE public.tuten_claim_sub_typification;
CREATE TABLE public.tuten_claim_sub_typification (
  id int4 NOT NULL,
  "name" text NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_claim_sub_typification_pkey PRIMARY KEY (id)
);

-- public.tuten_claim_type definition
-- Drop table
-- DROP TABLE public.tuten_claim_type;
CREATE TABLE public.tuten_claim_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  responsible_area_id int4 NULL,
  CONSTRAINT tuten_claim_type_pkey PRIMARY KEY (id)
);

-- public.tuten_claim_typification definition
-- Drop table
-- DROP TABLE public.tuten_claim_typification;
CREATE TABLE public.tuten_claim_typification (
  id int4 NOT NULL,
  "name" text NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_claim_typification_pkey PRIMARY KEY (id)
);

-- public.tuten_compensation_type definition
-- Drop table
-- DROP TABLE public.tuten_compensation_type;
CREATE TABLE public.tuten_compensation_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_compensation_type_pkey PRIMARY KEY (id)
);

-- public.tuten_payment_type definition
-- Drop table
-- DROP TABLE public.tuten_payment_type;
CREATE TABLE public.tuten_payment_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_payment_type_name_key UNIQUE (name),
  CONSTRAINT tuten_payment_type_pkey PRIMARY KEY (id)
);

-- public.tuten_priority definition
-- Drop table
-- DROP TABLE public.tuten_priority;
CREATE TABLE public.tuten_priority (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_priority_name_bu_key UNIQUE (name, business_unit_uuid),
  CONSTRAINT tuten_priority_pkey PRIMARY KEY (id)
);

-- public.tuten_response_type definition
-- Drop table
-- DROP TABLE public.tuten_response_type;
CREATE TABLE public.tuten_response_type (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_response_type_name_key UNIQUE (name),
  CONSTRAINT tuten_response_type_pkey PRIMARY KEY (id)
);

-- public.tuten_responsible_area definition
-- Drop table
-- DROP TABLE public.tuten_responsible_area;
CREATE TABLE public.tuten_responsible_area (
  id int4 NOT NULL,
  "name" varchar(50) NOT NULL,
  business_unit_uuid uuid NOT NULL,
  CONSTRAINT tuten_responsible_area_pkey PRIMARY KEY (id)
);

-- public.tuten_claim definition
-- Drop table
-- DROP TABLE public.tuten_claim;
CREATE TABLE public.tuten_claim (
  id bigserial NOT NULL,
  case_id int8 NOT NULL,
  customer_id int8 NOT NULL,
  beneficiary_type_id int4 NULL,
  priority_id int4 NULL,
  compensation_type_id int4 NULL,
  responsible_area_id int4 NULL,
  claim_type_id int4 NULL,
  typification_id int4 NULL,
  sub_typification_id int4 NULL,
  response_type_id int4 NULL,
  action_type_id int4 NULL,
  payment_type_id int4 NULL,
  document_type_id int4 NULL,
  status_id int4 NOT NULL,
  bank_id int8 NULL,
  account_type_id int8 NULL,
  description text NULL,
  compensation_apply bool NOT NULL,
  account_number varchar NULL,
  beneficiary_name varchar NULL,
  beneficiary_document_number varchar NULL,
  beneficiary_document_type int4 NULL,
  monetary_amount numeric(18, 2) NULL,
  monetary_unit varchar NULL,
  status_update_date timestamp NOT NULL DEFAULT now(),
  created_date timestamp NOT NULL DEFAULT now(),
  business_unit_uuid uuid NOT NULL,
  coming bool NULL,
  claim_proceeds varchar(2) NULL,
  is_from bool NULL,
  CONSTRAINT tuten_claim_pkey PRIMARY KEY (id)
);

-- public.tuten_claim foreign keys
ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_accounts_type_fk FOREIGN KEY (account_type_id) REFERENCES public.tuten_accounts_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_action_type_fk FOREIGN KEY (action_type_id) REFERENCES public.tuten_action_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_bank_fk FOREIGN KEY (bank_id) REFERENCES public.tuten_bank(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_beneficiary_document_type_fk FOREIGN KEY (beneficiary_document_type) REFERENCES public.tuten_document_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_beneficiary_type_fk FOREIGN KEY (beneficiary_type_id) REFERENCES public.tuten_beneficiary_type(id);


ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_claim_status_fk FOREIGN KEY (status_id) REFERENCES public.tuten_claim_status(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_claim_sub_typification_fk FOREIGN KEY (sub_typification_id) REFERENCES public.tuten_claim_sub_typification(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_claim_type_fk FOREIGN KEY (claim_type_id) REFERENCES public.tuten_claim_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_claim_typification_fk FOREIGN KEY (typification_id) REFERENCES public.tuten_claim_typification(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_compensation_type_fk FOREIGN KEY (compensation_type_id) REFERENCES public.tuten_compensation_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_document_type_fk FOREIGN KEY (document_type_id) REFERENCES public.tuten_document_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_payment_type_fk FOREIGN KEY (payment_type_id) REFERENCES public.tuten_payment_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_priority_fk FOREIGN KEY (priority_id) REFERENCES public.tuten_priority(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_response_type_fk FOREIGN KEY (response_type_id) REFERENCES public.tuten_response_type(id);

ALTER TABLE
  public.tuten_claim
ADD
  CONSTRAINT tuten_claim_tuten_responsible_area_fk FOREIGN KEY (responsible_area_id) REFERENCES public.tuten_responsible_area(id);