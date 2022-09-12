--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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
-- Name: type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.type AS ENUM (
    'credit',
    'debit',
    'both'
);


ALTER TYPE public.type OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: cards; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cards (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    number text NOT NULL,
    name text NOT NULL,
    cvc text NOT NULL,
    "expirateDate" text NOT NULL,
    password text NOT NULL,
    "isVirtual" boolean NOT NULL,
    type public.type NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title text NOT NULL
);


ALTER TABLE public.cards OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cards_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cards_id_seq OWNER TO postgres;

--
-- Name: cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cards_id_seq OWNED BY public.cards.id;


--
-- Name: credentials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credentials (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    title text NOT NULL,
    url text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.credentials OWNER TO postgres;

--
-- Name: credentials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.credentials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.credentials_id_seq OWNER TO postgres;

--
-- Name: credentials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.credentials_id_seq OWNED BY public.credentials.id;


--
-- Name: safeNotes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."safeNotes" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."safeNotes" OWNER TO postgres;

--
-- Name: safeNotes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."safeNotes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."safeNotes_id_seq" OWNER TO postgres;

--
-- Name: safeNotes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."safeNotes_id_seq" OWNED BY public."safeNotes".id;


--
-- Name: tokens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    token text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.tokens OWNER TO postgres;

--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tokens_id_seq OWNER TO postgres;

--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: wifi; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wifi (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    title text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.wifi OWNER TO postgres;

--
-- Name: wifi_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wifi_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wifi_id_seq OWNER TO postgres;

--
-- Name: wifi_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wifi_id_seq OWNED BY public.wifi.id;


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: cards id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards ALTER COLUMN id SET DEFAULT nextval('public.cards_id_seq'::regclass);


--
-- Name: credentials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials ALTER COLUMN id SET DEFAULT nextval('public.credentials_id_seq'::regclass);


--
-- Name: safeNotes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes" ALTER COLUMN id SET DEFAULT nextval('public."safeNotes_id_seq"'::regclass);


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: wifi id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifi ALTER COLUMN id SET DEFAULT nextval('public.wifi_id_seq'::regclass);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, email, password, "createdAt") FROM stdin;
1	joao@gmail.com	$2b$10$11uGjI3I1foJ.leX.UGPa.WBq2XBytdtgAXZXHAnvj520j/G41RMO	2022-09-08 18:58:15.896
7	vinijr@gmail.com	$2b$10$aZAuq38aMWrDP3sfM3pmFev38dA/Hm97rXN/h/0ZKl11zxy/5mD6S	2022-09-08 19:55:33.651
8	cr7@gmail.com	$2b$10$638qFZijOFxE.74txrAXYOlYCKXkqkYQT0toezLwHSAziHObAa98C	2022-09-08 20:02:38.153
9	lucas@gmail.com	$2b$10$UcrTFhau8oxb1V7Ab/Hz7ec9lnv5aCJ4lS1OSZ7BGQG9AnbZu4Km.	2022-09-12 20:13:15.089
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
5d909ea2-b55e-4073-98a3-c262cef2ebc9	d5fb3cfb76b5c9935fe042b434db1904cd356b42273ffcaab2d8692d98c55bcc	2022-09-08 12:12:31.801897-03	20220908151231_create_table_users	\N	\N	2022-09-08 12:12:31.789255-03	1
84c6796d-38d1-47c3-8b5b-1216d52d20b4	7ab1afcca4b9637ff3c7423125ea2daaac7ed676d0a9f18d1aff7fd092af8a70	2022-09-09 10:28:19.422784-03	20220909132819_create_table_tokens	\N	\N	2022-09-09 10:28:19.406471-03	1
fc0f77ea-71b1-46ae-8534-eabbca69a441	51ae53a371b7ff644033f42ec007eb5f568462047bce96a5a3f919b5e55447a2	2022-09-09 16:07:11.17992-03	20220909190711_create_table_credentials	\N	\N	2022-09-09 16:07:11.16783-03	1
e337731f-fc4d-4ba3-af1d-e98db86ff7c1	bc1652b135a9e663460b00c5f46cdd064645c9df1afcb7ece3355ac976b6b951	2022-09-11 16:01:53.076729-03	20220911190153_create_table_safe_notes	\N	\N	2022-09-11 16:01:53.064545-03	1
3f6370d0-867b-4290-9409-d625c712e105	41ad8b7e31f3e64f2ee5ee0986b85145f8004e5329bf1e8e4cc2b7403031bf74	2022-09-12 10:09:22.79397-03	20220912130922_create_table_cards	\N	\N	2022-09-12 10:09:22.78347-03	1
c84f296d-2ac7-45e2-b3f4-ceaffe19090d	03ffde3f60aa3a3407ccb1523c56319df2307dbdd93cea59cdf7b5789d1643c6	2022-09-12 10:13:29.200984-03	20220912131329_alterate_cards_colum_number_type	\N	\N	2022-09-12 10:13:29.190744-03	1
9f65c1a8-61b1-4c2b-a84b-711875aaa9e8	204858b69bfd2ad2647de44993aecbdfb0f6ce8571d58f2728c4caf83b7f2402	2022-09-12 10:48:37.481509-03	20220912134837_add_created_at_to_table_cards	\N	\N	2022-09-12 10:48:37.477528-03	1
d3f0d28f-4dfc-4918-a72d-905e618f6486	502f7b6b721e38662264b0189b49342644bcbbda856a1cedc3e31a304983146d	2022-09-12 11:40:26.185239-03	20220912144026_add_title_to_cards_column	\N	\N	2022-09-12 11:40:26.181671-03	1
d4ff1680-1bde-43e5-bd56-666fb217866a	ffd241dce9f204f2449073b335371d0e104236b857d0d841414caeae98d2e9c9	2022-09-12 14:30:25.510491-03	20220912173025_alterate_cards_cvc_type	\N	\N	2022-09-12 14:30:25.500286-03	1
8d9d9226-a12a-4770-967e-272e16a1d921	3b09da2b3117d7835d10b467a84365164307400cc2ca85af062f647622fbf81e	2022-09-12 14:54:57.399076-03	20220912175457_create_table_wifi	\N	\N	2022-09-12 14:54:57.389858-03	1
\.


--
-- Data for Name: cards; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cards (id, "userId", number, name, cvc, "expirateDate", password, "isVirtual", type, "createdAt", title) FROM stdin;
4	8	1234567890123458	lucas	b32f1f9080a4561b55d586bc936fa0e3a78de15d5a471500e2ea5fcf0ed5efb13135dd12d4b5f5e6bbcf1e2a95779c37093e1b9e7081ff9a4ede864976f3bb14ea08ffe720d5959166337cfc93a0c0c8c7d39ae1d08db4cf461c4a952df73ef2ff7e70	01/28	a46e86595773587730ac61c847a9ff8cb76fd9bb464871752ebc48f186e5147c737ff433c7851a4d0d13f6ad04abdb15af335c32baebe15efba5f83400d053ebb99099e48268a415e6c9f512a8eadd169ce3d81e368b1f02aba3761fbf37b0e510745a0526f7	t	both	2022-09-12 17:31:32.837	cartao flex
6	8	1234567890123459	lucas	137f4f88545dc0b3975c8a9b1b5f14734f1884c3f19c3a4a4c5a8de2c8ca66f64bd98c46cbc2b989a62799d62171df5b7c49498fef0aeefef28f9d78152d011078ea21921020c05b68943c24751ad24669fd6c6a905ff314d513df41bc0cf35dd7df6f	01/28	077ed265629983be86971c431a61149bbcaab4326fae40500dcf78e9bff33f8766fcb175ce238e479cb68bcf963183045a2f5a182311ec736a435aceb90fe241c1bc395e89a5a89b6324b3c775701958f40bde119df9f90024a5085c238d21608107e39dc7d9	t	credit	2022-09-12 18:54:40.142	cartao credito
\.


--
-- Data for Name: credentials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.credentials (id, "userId", title, url, username, password, "createdAt") FROM stdin;
4	8	showw	https://bootcampra.notion.site/Projeto-19-DrivenPass-39407e253b864fa7a5f874f013574875	lulaa	2970e95f0e6c6f9f544a89363ea4bb4e03228cad3f850b37e4ead13b50c09b94b49ee5803a100a9863ee0c8e7e1a8dc3bfe1a210153f785e8ec3aed39c6f3d7b69d38b6f6d8eac969bf7c5762a071d491f71c0d9af186e8935014cc07fa433d02b99668cdeb800dec16f	2022-09-11 16:12:43.788
5	1	show de bola	https://bootcampra.notion.site/Projeto-19-DrivenPass-39407e253b864fa7a5f874f013574875	lulaa	19a5380dae39282eef594c6fc35f44598d14f8e476ac5c74a862f36e2a5c98b6b816b758da5be6ee3f33cb8e7977f4c815a1b9c8fd2dcf7d324417e57b0226b3d098f872d68c88d83bef2ca7e654670205e544409e363f6acd49f592927d8610fe1d47a439a60fcdf50e	2022-09-11 16:15:58.962
6	8	show de bola	https://bootcampra.notion.site/Projeto-19-DrivenPass-39407e253b864fa7a5f874f013574875	lulaa	cbd590c0ca3899303614042baf9fb149f8964c19a06fc83e0098af2185be01041aff7797f8d5e4ef638b055e883a3caebbef0674b71c45538f50e89dd7fbca3a00e502c9debba2ec50721cacafba2b0408f4828e9aded6372ba2b5d38ab6cf566c0c75c3431758645976	2022-09-11 19:00:21.768
\.


--
-- Data for Name: safeNotes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."safeNotes" (id, "userId", title, description, "createdAt") FROM stdin;
2	1	abc	oiiiiii	2022-09-12 18:54:39.916
3	9	abc	oiiiiii	2022-09-12 20:35:14.411
\.


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tokens (id, token, "userId") FROM stdin;
4	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE2NjI3NTAwNTQsImV4cCI6MTY2Mjc4NjA1NH0.vYy0qdaqQfY9xL5RvAYA4k-9NwGRZSldlGzd8u7F9Is	8
5	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjYyOTEyNjU3LCJleHAiOjE2NjI5NDg2NTd9.hu65yBGWhWsmL4cvnRaO41HZWjh3-ssc3P9tDMS5Uxo	1
6	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjYyOTEyNzgwLCJleHAiOjE2NjI5NDg3ODB9.b_24tAUqwMt8Gfsx-FU2n8fPw8fr9voj_XMwn8WkpjI	1
7	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE2NjI5MjI3ODcsImV4cCI6MTY2Mjk1ODc4N30.fLlFfYATiax_3FA5pz4nb76CkXecGGsz7ENpiLRuIiQ	8
8	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN0BnbWFpbC5jb20iLCJpYXQiOjE2NjI5ODY4NDQsImV4cCI6MTY2MzAyMjg0NH0.80Ug6I1Hjem8xyBAGxcWiFbEK97BUszq73YbAcV09ZE	8
9	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjYzMDA3MzMwLCJleHAiOjE2NjMwNDMzMzB9.m8louGgy5gA17sD3_Gj7OPqcIfjcdIKimrcdm5B_vcI	1
10	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwiaWF0IjoxNjYzMDA4ODc5LCJleHAiOjE2NjMwNDQ4Nzl9.qEvopMd9zCeJtu_YFIhJcbpwexmpb3Ixmzqt88fJoCc	1
12	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQGdtYWlsLmNvbSIsImlhdCI6MTY2MzAxNDc2NCwiZXhwIjoxNjYzMDUwNzY0fQ.GSZiBCtRSW_b4T0gXqC3qAvvS9XjS4DyqsRrgJEho_Y	9
\.


--
-- Data for Name: wifi; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wifi (id, "userId", title, name, password, "createdAt") FROM stdin;
1	8	wifi de casa	redeVirtual	38e5659fa1a24f4c34c3bdfdce1bf0ecf7c12d8c03e19c540b41b3e0a8362c6f6cdd205ab136cac14c01547fcefe8014661937687236f77ba96e07f2c576ee9155d0c3fd91db57601e5e85754c1fb58cd11d0e6eddfa36dec38db95d372f32714b71d98bfcc1d4c1a9c1e24a7ffd38	2022-09-12 18:21:45.884
3	8	wifi de casa	redeVirtual	45b58cbf2e28759b465cf3ec15d986a840518ab2972e6b81ba615afe0aac9ba4c0cff6b6a1c5a5bb07bd5c9b2b4e68a27ea631a11f53bf547310f59b48ecbed0f92b0f519604b418ebaa38d21abe7a263e42a185d2cd6c147c5ff5004adb693eaeb39d026eb74282b10924980957a7	2022-09-12 18:54:40.732
4	8	wifi de casa	redeVirtual	c9288ea437835acb4d58f2726edf99d18ad9c21e24de83c81db36309ca24e332ed1f0f24d32c6335d6963d6efaa8015f9d8e0aff9ee8e762e9171da260b38760677be8e7527eba5a86c13296be59a39b9cac7e5805464e178f9f8f696e114d716dbf0f8e5e9646df9dec56cf7f900a	2022-09-12 20:39:25.87
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 9, true);


--
-- Name: cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cards_id_seq', 9, true);


--
-- Name: credentials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.credentials_id_seq', 7, true);


--
-- Name: safeNotes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."safeNotes_id_seq"', 3, true);


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tokens_id_seq', 12, true);


--
-- Name: wifi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wifi_id_seq', 5, true);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: cards cards_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT cards_pkey PRIMARY KEY (id);


--
-- Name: credentials credentials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT credentials_pkey PRIMARY KEY (id);


--
-- Name: safeNotes safeNotes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes"
    ADD CONSTRAINT "safeNotes_pkey" PRIMARY KEY (id);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: wifi wifi_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifi
    ADD CONSTRAINT wifi_pkey PRIMARY KEY (id);


--
-- Name: Users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Users_email_key" ON public."Users" USING btree (email);


--
-- Name: cards_number_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX cards_number_key ON public.cards USING btree (number);


--
-- Name: tokens_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tokens_token_key ON public.tokens USING btree (token);


--
-- Name: cards cards_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cards
    ADD CONSTRAINT "cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: credentials credentials_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credentials
    ADD CONSTRAINT "credentials_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: safeNotes safeNotes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."safeNotes"
    ADD CONSTRAINT "safeNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tokens tokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: wifi wifi_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wifi
    ADD CONSTRAINT "wifi_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

