import FundRaise from '../models/FundRaise.js'

export const postFundRaise = (req, res) => {
  try {
    const postFundRaise = new FundRaise({
      title: req.body.title,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      reason: req.body.email,
      file: req.body.file,
      amount: req.body.amount,
    })

    postFundRaise.save()

    res.status(201).json(postFundRaise)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const fetchData = () => {
  FundRaise.find({})
}
