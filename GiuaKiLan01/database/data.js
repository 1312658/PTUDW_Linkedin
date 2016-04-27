var LinkedInApp = angular.module('LinkedInApp', []);

LinkedInApp.controller('PersonDetail', function($scope) {
    $scope.person = {
    	'avatar': './picture/avatar.jpg',
    	'firstname': 'Jeff',
    	'lastname': 'Weiner',
     	'address': 'San Francisco Bay Area',
     	'personWebAddress': 'https://www.linkedin.com/in/jeffweiner08',
     	'summary': "Internet executive with over 20 years of experience, including general management of mid to large size organizations, corporate development, product development, business operations, and strategy.\n\n\n Currently CEO at LinkedIn, the web's largest and most powerful network of professionals.\n\nPrior to LinkedIn, was an Executive in Residence at Accel Partners and Greylock Partners. Primarily focused on advising the leadership teams of the firm's existing consumer technology portfolio companies while also working closely with the firm’s partners to evaluate new investment opportunities.\n\nPreviously served in key leadership roles at Yahoo! for over seven years, most recently as the Executive Vice President of Yahoo!'s Network Division managing Yahoo's consumer web product portfolio, including Yahoo's Front Page, Mail, Search, and Media products.\n\nSpecialties: general management, corporate development, product development, business operations, strategy, product marketing, non-profit governance",
     };

     $scope.education = {
     	'name': 'University of Pennsylvania - The Wharton School',
     	'falcuty': 'Bachelor of Science, Economics',
     	'courses': '1988 – June 1992',
     	'logo': './picture/Wharton.png'
     };

     $scope.currentJobs = {
     		'first': 
     		{
     			'positions': 'CEO',
     			'company': 'LinkedIn',
     			'logo': './picture/in.png',
     			'workTime': 'December 2008 – Present (7 years 5 months)',
     			'description': "Connecting the world's professionals to make them more productive and successful. Since joining the company in December 2008, LinkedIn has expanded its global platform to 23 languages and more than 30 offices around the world, grown its membership base from 33M to more than 347M, and increased its revenue from $78M to over $2.2B in 2014.",
     		},
     		'second': 
     		{
     			'positions': 'Member, Board of Directors',
     			'company': 'Intuit',
     			'logo': './picture/intuit.png',
     			'workTime': 'April 2012 – Present (4 years 1 month)',
     			'workPlace': 'Mountain View, CA',
     			'description': "With revenue of $4B+ and approximately 8,000 employees, Intuit is a leading provider of innovative business and financial management solutions for small and medium-sized businesses, consumers, accounting professionals and financial institutions.",
     		},
     		'third':
     		{
     			'positions': 'Member, Board of Directors',
     			'company': 'DonorsChoose',
     			'logo': './picture/donorsChoose.png',
     			'workTime': '2007 – Present (9 years)',
     			'workPlace': '',
     			'description': "One of the web's leading philanthropic marketplaces, designed to enable teachers to upload classroom projects in need of funding, and for anyone to select and fund a project.",
     		},
     		'fouth':
     		{
     			'positions': 'Member, Advisory Board',
     			'company': 'Boys & Girls Clubs of the Peninsula',
     			'logo': './picture/boys & girls clubs.png',
     			'workTime': '2011 – Present (5 years)',
     			'workPlace': 'San Francisco Bay Area',
     			'description': "BGCP’s mission is to help its members develop the academic and life skills they need to complete high school ready for college and career.\nBGCP serves youth in grades K–12 at nine locations: three clubhouses and six school sites in East Palo Alto, Menlo Park, and Redwood City, where over half the youth drop out of high school. While most youth development organizations select the young people whom they serve, BGCP serves all youth. The organization has grown rapidly over the past five years and now serves 2,000 active members at its nine sites.",
     		},
     		'fifth':
     		{
     			'positions': 'Member, Advisory Board',
     			'company': 'Venture For America',
     			'logo': './picture/venture.png',
     			'workTime': '2012 – Present (4 years)',
     			'workPlace': 'Greater New York City Area',
     			'description': "Innovative fellowship program that places top college graduates in start-ups for two years in low-cost U.S. cities to generate job growth and train the next generation of entrepreneurs.",
     		},
     		'sixth':
     		{
     			'positions': 'Member, Board of Directors',
     			'company': 'Malaria No More',
     			'logo': './picture/malaria no more.png',
     			'workTime': '2007 – December 2015 (8 years)',
     			'workPlace': '',
     			'description': "Non-profit organization with the mission to eradicate the millions of preventable and treatable deaths due to malaria. Working in conjunction with the United Nations Millennium Development Goals.",
     		},
     		'seventh':
     		{
     			'positions': 'Executive in Residence',
     			'company': 'Accel Partners',
     			'logo': './picture/accel.png',
     			'workTime': 'September 2008 – June 2009 (10 months)',
     			'workPlace': '',
     			'description': "",
     		},
     		'eighth':
     		{
     			'positions': 'Executive in Residence',
     			'company': 'Greylock',
     			'logo': './picture/greylock.png',
     			'workTime': 'September 2008 – June 2009 (10 months)',
     			'workPlace': '',
     			'description': "",
     		},
     		'nineth':
     		{
     			'positions': 'Executive Vice President Network Division',
     			'company': 'Yahoo!',
     			'logo': './picture/yahoo!.png',
     			'workTime': 'May 2001 – June 2008 (7 years 2 months)',
     			'workPlace': '',
     			'description': "Led a team of over 3,000 employees, managing products reaching over 500 million consumers, and overseeing a P&L responsible for roughly $3 billion in annual revenue. Helped drive the Network’s Open and Social strategy and growth of the company’s category-leading consumer web products, including Yahoo's Front Page, Mail, Search, and Media products, e.g. News, Sports, Finance, Entertainment.\n\nPreviously, was part of the Search leadership team that directed the acquisition and integration of Inktomi, AltaVista, FAST as well as the development of Yahoo! Search Technology. Oversaw development of Yahoo! Answers, and led the acquisitions of Flickr and del.icio.us. Helped lead the team formed to revitalize the company's Search Marketing efforts.\n\nFrom 2001 to 2002, oversaw Corporate Development at Yahoo!, responsible for the development and modification of overall corporate and individual business unit strategy and M&A.",
     		}
     	};

     $scope.skills = {
     	'first':
     	{
     		'name': 'Business Strategy',
     		'point': '99+'
     	},
     	'second':
     	{
     		'name': 'Leadership',
     		'point': '99+'
     	},
     	'third':
     	{
     		'name': 'Strategy',
     		'point': '99+'
     	},
     	'fouth':
     	{
     		'name': 'Entrepreneurship',
     		'point': '99+'
     	},
     	'fifth':
     	{
     		'name': 'Product Marketing',
     		'point': '99+'
     	},
     	'sixth':
     	{
     		'name': 'Strategic Planning',
     		'point': '99+'
     	},
     	'seventh':
     	{
     		'name': 'Executive Management',
     		'point': '96'
     	},
     	'eighth':
     	{
     		'name': 'Product Development',
     		'point': '87'
     	},
     	'nineth':
     	{
     		'name': 'Product Management',
     		'point': '76'
     	},
     	'tenth':
     	{
     		'name': 'LinkedIn',
     		'point': '73'
     	}
     };
 });