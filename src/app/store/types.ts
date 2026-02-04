import type { store } from "./index";
import type { rootReducer } from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
