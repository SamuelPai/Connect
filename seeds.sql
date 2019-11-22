use reunion;

INSERT INTO Activities (title, link, notes, eventDate, confirmed, votesYes, votesNo) VALUES (
		
        "fishing charter", 
        "http://www.silverkingfishon.com/CharterFishing/Milwaukee", 
        "we should do the half day trip",  
        "2022-12-21", 
        false, 
        2, 
        1
    );

INSERT INTO Trips (title, location, tripDescription, tripDate, image) 
VALUES (
        "Great Lakes Trip", 
        "Milwaukee", 
        "Fishing the great lakes",  
        "2022-12-21", 
        "http://amconshows.com/_website/wp-content/uploads/2018/08/p-768x440.jpeg"
    );

INSERT INTO Members (firstName, lastName, email, phoneNumber, image) VALUES (
        "Jeremy", 
        "Wade", 
        "jeremywade@example.com",  
        "12345674567", 
        "https://www.thesun.co.uk/wp-content/uploads/2017/05/nintchdbpict000324132193.jpg?w=620"
    );
