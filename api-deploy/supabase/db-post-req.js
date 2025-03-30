import express from 'express'
import { createClient } from '@supabase/supabase-js'

const app = express()
app.use(express.json()) // body-parser integriert

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

app.post('/message', async (req, res) => {
  const { message } = req.body
  if (!message) {
    return res.status(400).json({ error: 'Message is required' })
  }

  const { data, error } = await supabase
    .from('messages')
    .insert([{ content: message }])

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(201).json({ success: true, data })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`)
})
