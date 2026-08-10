import { createSafeContext } from './createSafeContext';

/** State for the multi-step /book consultation request. */
export const [BookingContext, useBooking] = createSafeContext('Booking');
