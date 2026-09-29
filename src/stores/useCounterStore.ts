import { create } from 'zustand';

// Example Zustand store. Use it as a pattern for your own stores; it isn't used anywhere yet.
// Docs: https://zustand.docs.pmnd.rs/

// 1. Describe the state and the actions that change it
interface CounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

// 2. Create the store with initial state and actions
export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

// 3. Use it in a component by selecting only what you need:
//
//   const count = useCounterStore((state) => state.count);
//   const increment = useCounterStore((state) => state.increment);
//
//   <button onClick={increment}>Clicked {count} times</button>
