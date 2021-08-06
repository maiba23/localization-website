import create from "zustand";

const useStore = create((set) => ({
  allSections: [],
  addSection: (section) => set(state => {
    return {...state, allSections:[...state.allSections, section]}
  })
})
)
export default useStore;
