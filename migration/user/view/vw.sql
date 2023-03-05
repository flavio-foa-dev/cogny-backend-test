DROP VIEW if exists ${schema:raw}.vw_example CASCADE;

 CREATE OR REPLACE VIEW ${schema:raw}.doc_record AS
 select doc_record as total from ${schema:raw}.api_data
 where id = 12
;

select * from ${schema:raw}.doc_record