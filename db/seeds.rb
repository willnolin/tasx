# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SubTask.destroy_all
Task.destroy_all
Project.destroy_all
User.destroy_all

@billy = User.create!(username: "billyboy",
email: "billy@mail.com", password: "123456", password_confirmation: "123456")
@matt = User.create!(username: "mattyboy",
email: "matty@mail.com", password: "654321", password_confirmation: "654321")
@molly = User.create!(username: "mallsy",
email: "molly@mail.com", password: "ABC123", password_confirmation: "ABC123")
puts "#{User.count} users created"


@project1 = Project.create!(name: "Project1", target_date:  20210927,
priority: "high", status: "not-started", user: @billy)

@project2 = Project.create!(name: "Project2", target_date:  20210927,
priority: "high", status: "not-started", user: @billy)

@project3 = Project.create!(name: "Project3", target_date:  20210627,
priority: "high", status: "not-started", user: @matt)

@project4 = Project.create!(name: "Project4", target_date:  20211227,
priority: "high", status: "not-started", user: @molly)

puts "#{Project.count} projects created"

@task1 = Task.create!(name: "sweep", target_date:20211117, description: "This is a task",
priority: "low", status: "not-started", project: @project1)

@task2 = Task.create!(name: "do dishes", target_date:20211117, description: "This is a task",
priority: "low", status: "not-started", project: @project1)

@task3 = Task.create!(name: "feed dog", target_date:20211117, description: "This is a task",
priority: "low", status: "not-started", project: @project2)

@task4 = Task.create!(name: "rake leaves", target_date:20211119, description: "This is a task",
priority: "low", status: "not-started", project: @project1)

@task5 = Task.create!(name: "party", target_date:20210117, description: "This is a task",
priority: "low", status: "not-started", project: @project3)

@task6 = Task.create!(name: "sweep again", target_date:20211117, description: "This is a task",
priority: "low", status: "not-started", project: @project2)

puts "#{Task.count} task(s) created"

@sub_task1 = SubTask.create!(name: "find broom", estimated_time: 1, complete: false, task: @task1)

@sub_task2 = SubTask.create!(name: "find dustpan", estimated_time: 2, complete: false, task: @task1)

@sub_task3 = SubTask.create!(name: "buy soap", estimated_time: 2, complete: false, task: @task2)

@sub_task4 = SubTask.create!(name: "sweep into dustpan", estimated_time: 0.5, complete: false, task: @task1)

@sub_task5 = SubTask.create!(name: "sweep", estimated_time: 2, complete: false, task: @task3)

@sub_task6 = SubTask.create!(name: "buy sponge", estimated_time: 2, complete: false, task: @task2)

puts "#{SubTask.count} sub task(s) created"