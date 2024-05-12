CREATE DATABASE budget;

CREATE TABLE expanse(
    expanse_id BIGSERIAL PRIMARY KEY,
    expanse_name VARCHAR(50) NOT NULL,
    expanse_cost INT not null,
    expanse_date timestamptz default current_timestamp
);
CREATE TABLE income(
    income_id BIGSERIAL PRIMARY KEY,
    income_name VARCHAR(50) NOT NULL,
    income_cost INT NOT NULL,
    expanse_date timestamptz default current_timestamp
);

INSERT INTO expanse (expanse_name, expanse_cost) VALUES ('kiyim', 100);
INSERT INTO expanse (expanse_name, expanse_cost) VALUES ('Telefon', 300);

INSERT INTO income (income_name, income_cost) VALUES ('oylik', 1000);
