import { writable } from "svelte/store";

const currentTurtle = writable({})
const turtleList = writable([])

export { currentTurtle, turtleList }