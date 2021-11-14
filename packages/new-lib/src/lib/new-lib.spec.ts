import { newLib } from './new-lib';

describe('newLib', () => {
  it('should work', () => {
    expect(newLib()).toEqual('new-lib');
  });
});
