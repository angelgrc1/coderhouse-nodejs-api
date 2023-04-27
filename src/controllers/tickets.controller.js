const { createTicketService } = require("../services/tickets.service");

const createTicket = async (req, res) => {
  try {
    const ticket = await createTicketService(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
