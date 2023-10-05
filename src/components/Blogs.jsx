import React, { useState } from 'react';
import Ap from './Comments.jsx';



const blogPosts = [
  {
    id: 1, 
    title: 'What Will Our Gardens Look Like in 2050?',
    des:'Climate Crsis',
    doc1:'Gardening',
    doc2:'Climate Change Trends That Will Shape Our Gardens',
    doc3:'Will We Embrace Sustainable Gardening or Not?',
    content: 'There are many reasons to think that our gardens will not look the same in 2050 as they do today. Gardening trends come and go. But more important are the changes that will come as the global climate continues to warm, and the differences that those changes will bring to the environmental conditions in many gardens and the plants that a specific garden contains. Models have been developed which show how conditions relating to temperatures, rainfall, and other factors will vary in a given area over the years to come, so scientists have a fairly clear idea of the expected trajectory for specific locations. ',
    content1:'For most of the world, things are heating up. As global temperatures continue to rise, the same changes in temperatures will be seen on a smaller scale, too, in our gardens. In some areas, the temperature change will be more profound than in others. How challenging the rising temperatures can be will depend on where you live. Even a small temperature change that does not feel substantial to us can make a big difference in a garden—to the plants we are growing and to the wildlife with which we share our space. ',
    content2:'When we try to imagine what gardens will look like in 2050, we not only have to look at how the environmental conditions will change by that point. We also need to think about how gardeners will respond to the immense challenges (and some opportunities) of our changing planet. One key question to ask is whether gardening will head on the trajectory towards greater biodiversity, nature wisdom, and sustainability or whether gardeners, in general, will take the wrong path and fail to embrace sustainable gardening. ',
image:'https://www.treehugger.com/thmb/vjhYGraEL3GRg5hrsf2tIZlHMLg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vitra-garden-9988a97cdacb41d6b4a563b2d784e8e4.jpg',
    author:'Elizabeth Waddington'
 }, 
  {
    id: 2,
    title: 'Noise Pollution: Environmental Impact and What You Can Do',
    des:'Pollution',
    doc1:'What is Noise Pollution?',
    doc2:'Examples of Noise Pollution',
    doc3:'Noise Pollution and the Clean Air Act',
    content: 'Noise pollution can also be defined as an unwanted sound. The noise that is studied usually refers to occupational noise instead of social noise or environmental noise like construction.In the E.U., around 56 million who live in areas with a population size of more than 250,000 people are exposed to more than average traffic noise. In the United States, noise has been shown to be increasing in California due to street traffic and increased at a rate of 6.7 dBA (A-weighted decibels). ',
     content1: 'Barcelona, Spain<br>Barcelona is among the top cities exposed to noise pollution. Almost 48% of city blocks had an average noise level over 65dB, and only 5% of city blocks had noise levels under 55dB, according to research on environmental noise inequities in the city. The area with the highest noise level was the Eixample district; this district has high flows of street traffic and is also where the very popular La Sagrada Familia is located. This district, as well as the Sarria-Sant Gervasi district, experience levels over 70dB. In Barcelona, 94% of the population lives in city blocks that experience high-noise levels. In Madrid, 80% of all urban noise comes from road traffic, according to an impact assessment of traffic noise in Madrid. In general, the E.U. has shown that 65% of Europeans live in major urban areas that are exposed to high noise levels.',
     content2: 'The Clean Air Act Amendment added Title IV to the document, which relates to noise pollution. This amendment established the EPA Office of Noise Abatement and Control to study the effect of noise on public health and the effect on wildlife, the psychological and physiological effects it may have on people, and the effect of sporadic extreme noise. The sources of noise that are regulated by the EPA include construction equipment, trucks, transport equipment, low-noise emission products, and rail and motor carriers. It also regulates the labeling of hearing protection devices.  During the time this amendment was written, the EPA identified the average exposure to environmental noise to be 70 dB over 24 hours and average levels of 55 dB outdoors. However, the Office of Noise Abatement and Control was closed as the administration thought it was best if issues regarding noise were handled at the local and State level, according to the EPA.',
    image: 'https://media.istockphoto.com/id/1438931606/photo/womans-hand-with-a-tree-she-is-planting-environmental-conservation-concept-protect-and.webp?b=1&s=170667a&w=0&k=20&c=DEkshiZ7Q0dQ__cktyiXQdIUTkzh4TF3IIFhMOFZc2E=',
    author:'Gabriella Sotelo',
  },
  {
    id: 3, 
    title: 'How to Opt Out of Junk Mail ',
    des:'Recycling Waste',
    doc1:'What is JunkMail?',
    doc2:'The Impact of Junk Mail',
    doc3:'The Impact of Junk Mail(Avoid Small Marketers)',
    content: 'Before the advent of email, a trip to the mailbox was often one filled with the pleasant anticipation of important messages, handwritten letters, perhaps a party invitation, or a holiday card. Now, more times than not, the mailbox delivers little more than credit card offers, coupons, and any manner of junk mail.The term "junk mail" encompasses many forms—unwanted catalogs, restaurant menus, advertisements and promotional flyers, and any other unsolicited items that end up in your mailbox. Most of these items may sit on your counter for days or weeks until they are thrown away in your next decluttering spree.Opting out of receiving junk mail is easily overlooked as a way to lessen waste and decrease your carbon footprint—but it a worthy act that more important than you think.',
    content1: 'Credit reporting agencies all have mailing lists that are used by credit card and insurance companies to send out junk mail. Fortunately, there is an opt-out service you can contact to stop receiving unsolicited offers for new credit cards and insurance. It allows customers to block prescreened credit card and insurance offers for either five years or permanently.',
    content2: 'Some may be familiar with Valpak, for example, which delivers blue envelopes that are filled with ads and coupons from local companies. You can remove your address from the Valpak blue envelope mailing list by filling out a form on their website. If you want access to some of their offerings but don’t want to receive them via mail, you can print their coupons online',
    image:'https://www.treehugger.com/thmb/KJr_H284mkP_hI9xv_4gwOlDGDU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bills---junk-mail-172900789-7c59061c56bc48928bba40ef076c9d7c.jpg',
    author:'Rebecca Clarke'
 },
  {
    id: 4, 
    title: 'Delta’s Green Marketing Lawsuit: A Springboard into Sustainabilitys Future',
    des:'Natural Science',
    doc1:'What is Green Marketing?',
    doc2:'The Evolution of Green Marketing',
    doc3:'The Dawn of Regenerative Business',
    content: 'Today, green marketing is evolving into a more substantial commitment to sustainability. Beyond mere labels, companies are integrating sustainability into their business models and operations. This shift is driven by a consumer base that is increasingly environmentally conscious. For instance, The North Face uses recycled materials, Starbucks is cutting waste with compostable cups, and Patagonia declared Earth as its sole shareholder.However, greenwashing casts a long shadow. It undermines the authenticity of genuine eco-friendly products and hampers environmental activist efforts. Consumers, misled into believing they are making green choices, may become complacent. Furthermore, the specter of greenwashing has given rise to “green hushing”—where companies underplay their sustainability initiatives to avoid accusations of greenwashing. This counterproductive silence hampers the collective effort needed for environmental sustainability.',
  content1:'Today, green marketing is evolving into a more substantial commitment to sustainability. Beyond mere labels, companies are integrating sustainability into their business models and operations. This shift is driven by a consumer base that is increasingly environmentally conscious. For instance, The North Face uses recycled materials, Starbucks is cutting waste with compostable cups, and Patagonia declared Earth as its sole shareholder.However, greenwashing casts a long shadow. It undermines the authenticity of genuine eco-friendly products and hampers environmental activistefforts. Consumers, misled into believing they are making green choices, may become complacent. Furthermore, the specter of greenwashing has given rise to “green hushing”—where companies underplay their sustainability initiatives to avoid accusations of greenwashing. This counterproductive silence hampers the collective effort needed for environmental sustainability.',
  content2:'Now, as we face environmental crises, it is imperative to move beyond labels and marketing strategies. We need to embrace a new era—that of "regenerative business." Sustainability, initially focusing mainly on environmental practices, has evolved. Sustainability 2.0 encompassed economic and social pillars, shifting from reactive to proactive, encompassing fair trade, community impact, and involving various departments within organizations.The new horizon is regenerative business, where sustainability is woven into every fabric of an organization. Here, sustainability drives innovation. It’s not just about mitigating environmental impact; its about rejuvenation, creating systems that restore and thrive. This concept heralds an integrated approach involving all stakeholders, especially the workforce, in realizing the organizations mission. ',
    image:'https://www.treehugger.com/thmb/u3eK2FU7aGvKAckJ2wwCW6tH2mY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/air-travel--airplane-shadow-landing--passenger-view--airport-runway-grass-area-1390210374-8c2abaa8f0bf46319b1821ff22333fdb.jpg',
    author:'Gagan Levy',
 },

];

const MainPage = ({ onTitleClick }) => {
  return (
    
    <div className='main'>
      <section className="bloghome" >

<div className="blogcontent">

    <h1>BLOGS</h1>
    <p>The new way to look towards a sustainable enviornment</p>
    

</div>

</section>
      <div className='post'>
      <ul>
        {blogPosts.map((post) => (
          
            <div className='data' key={post.id}>
              <h3>{post.des}</h3>
            <div>
          
              <img src={post.image} alt={post.title} className='imageblogs'/>
            </div>
            <a href="#"className='link' onClick={() => onTitleClick(post)}>
              {post.title}
            </a>
              <h4>by {post.author}</h4>
            </div>
    
          
        ))}
      </ul>
      </div>
      
    </div>
  );
};

const BlogPostPage = ({ post }) => {
  return (
    <div className='inside'>
      <h1 className='header'>{post.title}</h1>
      <h3 className='by'>by {post.author}</h3>
      <img src={post.image} alt={post.title} className='img_inside' />
<h1 className='content'>Table Of Content</h1>
      <div class="row table_1">
  <div class="col-3">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column datas">
        <a class="nav-link" href="#item-1">{post.doc1}</a>
       
        <a class="nav-link" href="#item-2">{post.doc2}</a>
        <a class="nav-link" href="#item-3">{post.doc3}</a>
        
      </nav>
    </nav>
  </div>

  <div class="col-8">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>{post.doc1}</h4>
        <p className='text'>{post.content}</p>
      </div>
      <div id="item-2">
        <h4>{post.doc2}</h4>
        <p className='text'>{post.content1}</p>
      </div>
      <div id="item-3">
        <h4>{post.doc3}</h4>
        <p className='text'>{post.content2}</p>
      </div>
      
    </div>
  </div>
</div>
      
     
      
    
      <div><Ap/></div>
    </div>
    
  );
};

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleTitleClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className='bodyblogs'>
      {selectedPost ? (
        <BlogPostPage post={selectedPost} />
      ) : (
        <MainPage onTitleClick={handleTitleClick} />
      )}
    </div>
  );
};

export default App;
