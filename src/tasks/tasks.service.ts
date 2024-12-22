import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'This is task 1',
      status: 'TODO',
      ownerId: -1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      isDeleted: false,
    },
  ];
  create(createTaskDto: CreateTaskDto) {
    const nextId = Math.max(...this.tasks.map((task) => task.id)) + 1;
    const task = new Task(
      nextId,
      createTaskDto.title,
      createTaskDto.description,
    );
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
