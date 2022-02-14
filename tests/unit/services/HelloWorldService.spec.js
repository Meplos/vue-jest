import HelloWorldService from '@/services/HelloWorldService.js';

describe('HelloWorldService', () => {
  it('should return "Hello World"', () => {
    const service = new HelloWorldService();
    expect(service.getMessage()).toBe('Hello World');
  });
});
