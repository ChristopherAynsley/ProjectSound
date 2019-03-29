-- database setup for mysql

create user asianjim@localhost identified by 'dootdoot';
create database soundsync_db;
grant all privileges on soundsync_db.* to asianjim@localhost;
use soundsync_db;

drop table if exists user;
drop table if exists song;
drop table if exists sheet_music;
drop table if exists comments;

create table if not exists User (
  user_id int auto_increment primary key ,
  user_name varchar(30) not null
);

create table if not exists Song (
  song_id int auto_increment primary key ,
  song_name varchar(30) not null ,
  song_file_path varchar(50) not null
);

create table if not exists Sheet_Music(
  sheet_music_id int auto_increment primary key ,
  sheet_music_name varchar(30) not null ,
  sheet_music_file_path varchar(50) not null
);

-- error when adding this table - related to foriegn key assignment
create table if not exists Comments (
  comments_id int(10)  primary key ,
  comments_text text not null ,
  comments_date_posted datetime not null ,
  comments_posted_by int not null references User(user_id),
  song_comments_posted_to int not null references Song(song_id),
  sheet_music_comments_posted_to int not null references Sheet_Music(sheet_music_id),
);

-- add sample data here
