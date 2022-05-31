--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

-- Started on 2022-05-30 22:38:55 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "challengeAlkemy";
--
-- TOC entry 3033 (class 1262 OID 190875)
-- Name: challengeAlkemy; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "challengeAlkemy" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'es_AR.UTF-8' LC_CTYPE = 'es_AR.UTF-8';


ALTER DATABASE "challengeAlkemy" OWNER TO postgres;

\connect "challengeAlkemy"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3034 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- TOC entry 634 (class 1247 OID 191217)
-- Name: enum_Movements_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Movements_type" AS ENUM (
    'ENTRY',
    'EXIT'
);


ALTER TYPE public."enum_Movements_type" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 207 (class 1259 OID 191206)
-- Name: Categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categories" (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    "UserId" uuid
);


ALTER TABLE public."Categories" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 191221)
-- Name: Movements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Movements" (
    id uuid NOT NULL,
    type public."enum_Movements_type" NOT NULL,
    concept character varying(255) NOT NULL,
    amount numeric NOT NULL,
    date date NOT NULL,
    "UserId" uuid,
    "CategoryId" uuid
);


ALTER TABLE public."Movements" OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 191195)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id uuid NOT NULL,
    name text DEFAULT 'User'::text NOT NULL,
    email text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 3026 (class 0 OID 191206)
-- Dependencies: 207
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Categories" (id, name, "UserId") FROM stdin;
\.


--
-- TOC entry 3027 (class 0 OID 191221)
-- Dependencies: 208
-- Data for Name: Movements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Movements" (id, type, concept, amount, date, "UserId", "CategoryId") FROM stdin;
\.


--
-- TOC entry 3025 (class 0 OID 191195)
-- Dependencies: 206
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, email) FROM stdin;
\.


--
-- TOC entry 2893 (class 2606 OID 191210)
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- TOC entry 2895 (class 2606 OID 191228)
-- Name: Movements Movements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movements"
    ADD CONSTRAINT "Movements_pkey" PRIMARY KEY (id);


--
-- TOC entry 2889 (class 2606 OID 191205)
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- TOC entry 2891 (class 2606 OID 191203)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 2896 (class 2606 OID 191211)
-- Name: Categories Categories_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2898 (class 2606 OID 191234)
-- Name: Movements Movements_CategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movements"
    ADD CONSTRAINT "Movements_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES public."Categories"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 2897 (class 2606 OID 191229)
-- Name: Movements Movements_UserId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movements"
    ADD CONSTRAINT "Movements_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-05-30 22:38:56 -03

--
-- PostgreSQL database dump complete
--

