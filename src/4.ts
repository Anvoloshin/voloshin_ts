type TaskType = string | number;

class Queue<T> {
  private tasks: T[] = [];
  private delay: number = 10;
 
  private runQueue(): void {
    setTimeout(() => this.doJob(), this.delay);
  }
 
  private doJob(): void {
    const task = this.tasks.shift();
    if (task != null) {
      console.log(task);
    }
    this.runQueue();
  }
 
  public addJob(task: T) : number {
    return this.tasks.push(task);
  }
 
  public run(): void {
    this.runQueue();
  }
 
  public set jobDelay(time: number) {
    this.delay = time;
  }
}

class Task<T> {
  public value: T;
  public constructor(value: T) {
    this.value = value;
  }
}
 
const queue = new Queue<Task<TaskType>>();
const task1 = new Task<TaskType>('task#1');
const task2 = new Task<TaskType>(1);
 
queue.jobDelay = 1000;
 
queue.addJob(task1);
queue.addJob(task2);
 
queue.run();