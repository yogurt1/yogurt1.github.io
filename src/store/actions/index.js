import * as counter from "./counter"
import * as locale from "./locale"
import * as posts from "./posts"
import * as ui from "./ui"

export default {
    ...ui,
    ...counter,
    ...locale,
    ...posts
}
