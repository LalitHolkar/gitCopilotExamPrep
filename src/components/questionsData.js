const questions = [
  {
    id: 1,
    text: 'What is C#?',
    answer: 'C# is a modern, object-oriented programming language developed by Microsoft for building a variety of applications on the .NET platform.'
  },
  {
    id: 2,
    text: 'What is the difference between value type and reference type in C#?',
    answer: 'Value types store data directly, while reference types store a reference to the data. Value types are stored on the stack, reference types on the heap.'
  },
  {
    id: 3,
    text: 'Explain the concept of inheritance in C#.',
    answer: 'Inheritance allows a class to inherit members (fields, methods, properties) from another class, promoting code reuse.'
  },
  {
    id: 4,
    text: 'What is a delegate in C#?',
    answer: 'A delegate is a type that represents references to methods with a particular parameter list and return type. Delegates are used for event handling and callbacks.'
  },
  {
    id: 5,
    text: 'What is LINQ in C#?',
    answer: 'LINQ (Language Integrated Query) is a set of features that allows querying collections in a declarative way using C# syntax.'
  },
  {
    id: 6,
    text: 'What is the difference between an abstract class and an interface in C#?',
    answer: 'An abstract class can have implementations for some members, while an interface can only have declarations. A class can implement multiple interfaces but inherit only one abstract class.'
  },
  {
    id: 7,
    text: 'What is the purpose of the "using" statement in C#?',
    answer: 'The "using" statement ensures that IDisposable objects are disposed of properly, releasing resources automatically.'
  },
  {
    id: 8,
    text: 'What is async/await in C#?',
    answer: 'async/await are keywords used for asynchronous programming, allowing non-blocking operations and better responsiveness.'
  },
  {
    id: 9,
    text: 'What is encapsulation in C#?',
    answer: 'Encapsulation is the concept of restricting access to certain details of an object and only exposing necessary parts through public members.'
  },
  {
    id: 10,
    text: 'How do you handle exceptions in C#?',
    answer: 'Exceptions are handled using try, catch, finally blocks. The catch block handles errors, and finally executes code regardless of exceptions.'
  }
];

export default questions;
