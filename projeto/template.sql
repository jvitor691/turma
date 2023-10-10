create table usuario(
	id serial,
	nome text,
	email text,
	senha text,
	username text,
	
	primary key (id),
	unique (email),
	unique (username)
)

create table link(
	id serial,
	titulo text,
	url text,
	ativo bool,
	usuario_id int,
	
	primary key (id),
	foreign key (usuario_id) references usuario (id)
)