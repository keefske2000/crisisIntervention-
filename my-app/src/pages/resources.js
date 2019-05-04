import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


function Resource(){
    return (
        <div>
<CardDeck>
  <Card>
  <a href="https://www.psychologytoday.com/us">
    <Card.Img variant="top" src="data:image/png;base64,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" />
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      Provides a comprehensive directory of therapists, psychiatrists and treatment facilities near you.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
      <a href="https://www.homelessshelterdirectory.org/index.html">
    <Card.Img variant="top" src="data:image/png;base64,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" />
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      The Homeless Shelter Directory is a free resources that helps support the homeless and list shelters for emergency housing needs. {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
      <a href="http://www.211.org/services/crisis-and-emergency">
    <Card.Img variant="top" src="http://www.211.org/assets/img/svg/211-logo.svg" />
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Reach out to 2-1-1 to speak with a community resource specialist in your area who can help you find services and resources that are available to you locally and provide critical services that can improve-and save-lives.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
      <a href="https://www.ndrn.org/">
    <Card.Img variant="top" src="https://www.ndrn.org/wp-content/uploads/2019/02/logo@2x.png" />
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      NDRN’s mission is to promote the integrity and capacity of the P&A and CAP national network and to advocate for the enactment and vigorous enforcement of laws protecting civil and human rights of people with disabilities. NDRN has a vision of a society where people with disabilities have equality of opportunity and are able to participate fully in community life by exercising choice and self-determination.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
      <a href="https://www.pparx.org/">
    <Card.Img variant="top" src="https://www.pparx.org/sites/default/files/ppa-logo_2_0.png" />
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      Our mission is to increase awareness of patient assistance programs and boost enrollment of eligible individuals. We offer a single point of access to more than 475 public and private programs, including about 200 programs offered by biopharmaceutical companies. We've helped millions of Americans to get prescription drugs for free or at very low cost drugs.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
      <a href="https://suicidepreventionlifeline.org/our-crisis-centers/">
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ivByzykFK7QjRL0Y_Wt_OJ3VxEH9ZwkHAEVJ_h9xERZi8WHw"/>
    </a>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      Mobile crisis services teams respond to adults throughout the District who are experiencing a psychiatric crisis whether in the homes or on the street and who are unable or unwilling to travel to receive mental health services. Clinicians also are available to provide counseling support after traumatic events whether personal or community wide.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
</div>

    );
}


export default Resource;