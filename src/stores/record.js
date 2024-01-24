import { defineStore } from "pinia";

export const useRecordStore = defineStore("record", {
    state: () => ({
        recordTime: null,
    }),
    getters: {
        record: (state) => state.recordTime,
    },
    actions: {
        setNewRecord(time) {
            this.recordTime = time;
        },
    },
});