import { z} from 'zod'
const createSchema = z.object({
    title : z.string().trim().min(1),
    content : z.string().trim().min(1)
})
const updateSchema = z.object({
    title : z.string().trim().min(1).optional(),
    content : z.string().trim().min(1).optional()
})

export default {createSchema , updateSchema}
