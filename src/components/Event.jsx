import React, { useState } from 'react';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    title: '',
    category: '',
    description: '',
    organizerType: '',
    date: '',
    venue: '',
    contact: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventData]);
    setEventData({
      title: '',
      category: '',
      description: '',
      organizerType: '',
      date: '',
      venue: '',
      contact: ''
    });
    setIsFormOpen(false);
  };

  const toggleEventExpansion = (index) => {
    if (expandedEventIndex === index) {
      setExpandedEventIndex(null); // Collapse if it's already expanded
    } else {
      setExpandedEventIndex(index); // Expand if it's not expanded
    }
  };

  // Function to filter events by category
  const filterEventsByCategory = (event) => {
    if (!selectedCategory || event.category.toLowerCase() === selectedCategory.toLowerCase()) {
      return true;
    }
    return false;
  };

  return (
    <div className="events-page">
      <h1>Events</h1>
      <h2>Upcoming Events</h2>
      <br></br>
      <hr />
      <br />
      <button className="addevent" onClick={() => setIsFormOpen(true)}>Add Event</button>
      {isFormOpen && (
        <form onSubmit={handleFormSubmit} className="form-container">
          <label>
            Event Name:
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Category:
            <select className="cat"
              name="category"
              value={eventData.category}
              onChange={handleInputChange}
            >
              <option value="default">Select a category</option>
              <option value="Plantation Drive">Plantation Drive</option>
              <option value="Clean-up Campaign">Clean-up Campaign</option>
              <option value="Water Conservation Drive">Water Conservation Drive</option>
              <option value="Energy Conservation Workshop">Energy Conservation Workshop</option>
              <option value="Wildlife Conservation Event">Wildlife Conservation Event</option>
              {/* Add more categories as needed */}
            </select>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Organizer:
            <select className="cat"
              name="organizationType"
              value={eventData.organizationType}
              onChange={handleInputChange}
            >
              <option value="default">Select a type</option>
              <option value="individual">Individual</option>
              <option value="organization">Organization</option>
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Venue:
            <input
              type="text"
              name="venue"
              value={eventData.venue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Contact Details:
            <input
              type="text"
              name="contact"
              value={eventData.contact}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="search-bar" style={{ marginLeft: '40px' }}> 
      <h3>
        <label><pre>
          <b>Search:  </b></pre>
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ width: '200px' }}
        >
          <option value="">Select a category</option>
          <option value="Plantation Drive">Plantation Drive</option>
          <option value="Clean-up Campaign">Clean-up Campaign</option>
          <option value="Water Conservation Drive">Water Conservation Drive</option>
          <option value="Energy Conservation Workshop">Energy Conservation Workshop</option>
          <option value="Wildlife Conservation Event">Wildlife Conservation Event</option>
          {/* Add more categories as needed */}
        </select></label>
        </h3>
      </div>
      
      

      <div className="event-card-container">
        {events.map((event, index) => (
          // Add conditional check for filtering
          filterEventsByCategory(event) && (
            <div key={index} className="event-card">
              <div className="title">
                <h2>
                  <big>{event.title}</big>
                </h2>
              </div>
              <div className="carddet1">
                <p>
                  <b>Category: </b>
                  {event.category}
                </p>
                <p>
                  <b>Date: </b>
                  {event.date}
                </p>
                <p>
                  <b>Venue: </b>
                  {event.venue}
                </p>
              </div>
              {expandedEventIndex === index && (
                <div className="expanded-details">
                  <p>
                    <b>Description: </b>
                    {event.description}
                  </p>
                  <p>
                    <b>Organizer Type: </b>
                    {event.organizationType}
                  </p>
                  <p>
                    <b>Contact Details: </b>
                    {event.contact}
                  </p>
                </div>
              )}

              {/* Add View Details and Apply buttons */}
              <div className="event-card-buttons">
                <button
                  className="view-details-button"
                  onClick={() => toggleEventExpansion(index)}
                >
                  {expandedEventIndex === index ? 'Hide Details' : 'View Details'}
                </button>
                <button className="apply-button">Apply</button>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
