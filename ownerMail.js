module.exports = (name, email, description, phone, project, items, random) =>
  `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width">
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style type="text/css">
	body{
		font-family: 'Nunito', sans-serif;
		padding: 50px;
	  }
	  .card{
		  border-radius: 4px;
		  background: #fff;
		  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
			transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
		padding: 14px 80px 18px 36px;
		cursor: pointer;
	  }
	  
	  .card:hover{
		   transform: scale(1.05);
		box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
	  }
	  
	  .card h3{
		font-weight: 600;
	  }
	  
	  .card img{
		position: absolute;
		top: 20px;
		right: 15px;
		max-height: 120px;
	  }
	  
	  .card-1{
		background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
			background-repeat: no-repeat;
		  background-position: right;
		  background-size: 80px;
	  }
	  
	  .card-2{
		 background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
			background-repeat: no-repeat;
		  background-position: right;
		  background-size: 80px;
	  }
	  
	  .card-3{
		 background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);
			background-repeat: no-repeat;
		  background-position: right;
		  background-size: 80px;
	  }
	  
	  @media(max-width: 990px){
		.card{
		  margin: 20px;
		}
	  } 
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
		

<div class="container">

<div class="row">
  <div class="col-md-4">
	<div class="card card-1">
	<p>${Object.values(items).map(key => {
		return JSON.stringify(key)
	})}</p>
	<p>${JSON.stringify(random)}</p>
	  <h3>Designing</h3>
	  <p>By virtue of this definition, design is undeniably art. It can be found in every human culture. It is used to create objects, performances, and experiences..</p>
	</div>
  </div>
  <div class="col-md-4">
	<div class="card card-2">
	  <h3>Animation</h3>
	  <p>Animation is not the art of drawings that move but the art of movements that are drawn..</p>
	</div>
  </div>
  <div class="col-md-4">
	<div class="card card-3">
	  <h3>Graphics</h3>
	  <p>Something graphic is visual. And a story that is too graphic is too good at showing you things that are, for example, shocking or violent. ... Derived from the Greek graphikos, meaning "drawn" or "written," graphic shows up often before words such as design or art.</p>
	</div>
  </div>
</div>
</div>
	<!--[if (IE)]></div><![endif]-->
</body>

</html>`;
