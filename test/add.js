import {test} from "ava"

const add = a => b => a + b

test("add", t => {
    const expected = 4
    const got = add(2)(2)
    t.true(expected == got)
})
