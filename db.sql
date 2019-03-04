

create database soundsync_db;

create table user (
  user_id int auto_increment primary key ,
  user_name varchar(30) not null
);

create table song (
  song_id int auto_increment primary key ,
  song_name varchar(30) not null
);

create table sheet_music(
  sheet_music_id int auto_increment primary key ,
  sheet_music_name varchar(30) not null
);

create table comments (
  comments_id int(10)  primary key ,
  comments_text text not null ,
  comments_date_posted datetime not null ,
  comments_posted_by int not null ,
  song_comments_posted_to int not null ,
  sheet_music_comments_posted_to int not null ,
  foreign key(comments_posted_by) from  user(user_id) ,
  foreign key(song_comments_posted_to) from song(song_id) ,
  foreign key(sheet_music_comments_posted_to) from sheet_music(sheet_music_id)
);
