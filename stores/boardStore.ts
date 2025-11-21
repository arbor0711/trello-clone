import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import boardData from "../data/board.json"

export const useBoardStore = defineStore('boardStore', {
    state: () => ({
        board : useStorage('board', boardData)
    }),
    getters: {
        getBoard: (state) => state.board,
    },
    actions: {
        handleDeleteColumn(id: number){
            const newColumns= this.board.columns.filter(x => x.id !== id)
            this.board.columns = newColumns;
        }
    }
})