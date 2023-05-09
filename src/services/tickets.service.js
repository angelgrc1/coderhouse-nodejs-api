const TicketDao = require("../dao/tickets.dao");
const ticketsSchema = require("../models/tickets.schema");

const dao = new TicketDao("Ticket", ticketsSchema);

const createTicketService = async (ticket) => {
  try {
    const newTicket = await dao.createTicket(ticket);
    return newTicket;
  } catch (error) {
    throw Error("Error al crear un ticket: ", error);
  }
};

module.exports = { createTicketService };
