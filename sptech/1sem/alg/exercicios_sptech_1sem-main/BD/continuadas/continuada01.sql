-- Contextualizando a regra de negócio:
-- "O histórico mostra as páginas que você visitou no Chrome nos últimos 90 dias. Ele não armazena páginas do Chrome (como chrome://settings), 
--  páginas visitadas no modo de navegação anônima nem aquelas que já foram excluídas do seu histórico de navegação."


CREATE DATABASE continuada1;

USE continuada1;

drop table historico;

CREATE TABLE historico (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200) NOT NULL,
dataHora DATETIME DEFAULT current_timestamp,
url VARCHAR(250) NOT NULL,
navegador VARCHAR(100)
);

INSERT INTO historico (nome, url, navegador) VALUES
	('São Paulo Tech School', 'https://moodle.sptech.school/', 'Microsoft Edge'),
	('Página Inicial - Microsoft Azure', 'https://portal.azure.com/#home', 'Microsoft Edge'),
	('Ofertas e Promoções | Amazon.com.br', 'https://www.amazon.com.br/deals?ref_=nav_cs_gb', 'Firefox Developer Edition'),
	('404 Not Found', 'http://moodletech.azurewebsites.net/', 'Firefox Developer Edition'),
	('Working...', 'https://login.microsoftonline.com/kmsi', 'Firefox Developer Edition'),
	('Email - Usuario Aluno - Outlook', 'https://outlook.office.com/mail/', 'Firefox Developer Edition'),
	('Solicitações - Suporte - Digital Building', 'https://bandtec.sdpondemand.manageengine.com/app/itdesk/ui/requests', 'Firefox Developer Edition'),
	('Carrinho de compras da Amazon.com', 'https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart', 'Firefox Developer Edition'),
	('MySQL | Begin Your Download', 'https://dev.mysql.com/downloads/file/?id=516926', 'Firefox Developer Edition'),
	('MySQL | Download MySQL Installer', 'https://dev.mysql.com/downloads/installer/', 'Firefox Developer Edition');
    

desc historico;
select * from historico;

-- EXCLUIR O CAMPO NA TABELA historico CHAMADO navegador;
alter table historico drop column navegador;

/* - INSERIR OS DADOS NA TABELA historico CONFORME ABAIXO: 
		* nome = '404 Not Found';
		* url = 'http://moodletech.azurewebsites.net/';
		* navegador = 'Google Chrome';
E EXIBIR OS DADOS DA TABELA historico ONDE O nome É '404 Not Found' E O navegador É 'Google Chrome';
*/

insert into historico (nome, url, navegador) values
 ('404 Not Found', 'http://moodletech.azurewebsites.net/', 'Google Chrome'); 
 
select * from historico where nome = '404 Not Found' and navegador = 'Google Chrome';

-- AUMENTAR A QUANTIDADE DE CARACTERES DO CAMPO url NA TABELA historico PARA 500 caracteres;
alter table historico modify column url varchar(500);

-- EXIBIR OS DADOS DA TABELA historico CUJO A url TERMINA COM O CARACTER /;
select * from historico where url like '%/';

/* - NO CAMPO navegador DA TABELA historico, 
ADICIONAR A CONSTRAINT CHECK PARA INSERIR NO CAMPO APENAS OS SEGUINTES DADOS: 'Microsoft Edge', 'Firefox Developer Edition', 'Google Chrome';
*/

alter table historico add constraint check (navegador in ('Microsoft Edge', 'Firefox Developer Edition', 'Google Chrome'));

insert into historico (nome, url, navegador) values
 ('404 Not Found', 'http://moodletech.azurewebsites.net/', 'Google'); 
 
 -- EXIBIR APENAS O CAMPO navegador DA TABELA historico ONDE O navegador É DIFERENTE DE 'Microsoft Edge';
 select navegador from historico where navegador <> 'Microsoft Edge';
 
SELECT navegador FROM historico WHERE navegador != 'Microsoft Edge';

-- EXIBIR OS DADOS DA TABELA historico CUJO A url CONTEM A PALAVRA 'AMAZON';
select * from historico where url like '%AMAZON%';

-- EXIBIR OS DADOS DA TABELA historico CUJO A url TEM COMO PENÚLTIMA LETRA, A LETRA T;
select * from historico where url like '%T_';

-- EXIBIR APENAS OS NOMES DA TABELA historico CUJO O navegador É 'Microsoft Edge';
select nome from historico where navegador = 'Microsoft Edge';

-- ATUALIZAR O DADO DO CAMPO navegador DA TABELA historico PARA 'Google Chrome' ONDE O nome É IGUAL A  'Working...';
SELECT id FROM historico WHERE nome = 'Working...';
UPDATE historico SET navegador = 'Google Chrome' WHERE id = 5;

-- RENOMEAR O CAMPO nome PARA titulo DA TABELA historico;
desc historico;
ALTER TABLE historico RENAME COLUMN nome TO titulo;

-- EXIBIR OS DADOS DA TABELA historico CUJO O nome COMEÇA COM A LETRA M;
select * from historico where nome like 'M%';

/* - INSERIR UM REGISTRO NA TABELA HISTÓRICO CONFORME DADOS ABAIXO:
	nome = 'Fazer login no Canvas (instructure.com)'
	url = 'https://awsacademy.instructure.com/login/canvas'
	dataHora = '2023-02-16 10:36:00'
*/
select * from historico;
insert into historico (nome, url, dataHora) values
	('Fazer login no Canvas (instructure.com)', 'https://awsacademy.instructure.com/login/canvas', '2023-02-16 10:36:00');
    
INSERT INTO historico (nome, url, dataHora) VALUES

	('Fazer login no Canvas (instructure.com)', 'https://awsacademy.instructure.com/login/canvas', '2023-02-16 10:36:00');

-- ATUALIZAR O DADO DO CAMPO dataHora DA TABELA historico PARA '2023-02-31 08:00:00' ONDE O nome É IGUAL A  'Página Inicial - Microsoft Azure';

SELECT id FROM historico WHERE nome = 'Página Inicial - Microsoft Azure';
UPDATE historico SET dataHora = '2023-02-31 08:00:00' WHERE id = 2;

-- EXCLUIR A TABELA historico DO BANCO DE DADOS continuada1;
DROP TABLE historico;

-- EXCLUIR A TUPLA DA TABELA historico CUJO O nome CONTÉM A PALAVRA Download;
SELECT * FROM historico WHERE nome LIKE '%Download%';
DELETE FROM historico WHERE id in (9,10);

/*- ADICIONAR UM CAMPO NA TABELA historico CHAMADO sistOp (30 caracteres), ONDE GUARDARÁ O SISTEMA OPERACIONAL DO HISTÓRICO DE NAVEGAÇÃO;

Exemplo 1: Windows 10 Edu;

Exemplo 2: Linux 20.04;

*/

desc historico;
ALTER TABLE historico ADD COLUMN sistOp VARCHAR(30);