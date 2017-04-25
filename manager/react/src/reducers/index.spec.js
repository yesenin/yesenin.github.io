import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toEqual({"count":0})
    })
    
    it('should handle INCREMENT action', () => {
      expect(counter({count: 1}, { type: 'INCREMENT' })).toEqual({"count": 2})
    })

    it('should handle DECREMENT action', () => {
      expect(counter({count: 4}, { type: 'DECREMENT' })).toEqual({"count": 3})
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).toEqual(1)
    })
  })
})