import test, { describe } from 'vitest';
import { greet } from './hello.js';


describe(' testing greet function', () => {
    test('should greet print the correct message', () => {
        const name = "miuroro";
        const consoleSpy = vi.spyOn(console, 'log');
        greet();
        expect(consoleSpy).toHaveBeenCalledWith(`Hello, ${name}!`);
        
    });
});