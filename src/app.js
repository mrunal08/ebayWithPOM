module.exports = {
    isHomePageUrl: function(browserUrl){
      if(browserUrl === "https://www.ebay.com"){
        return "Pass";
      }
      else{
        return "Fail";
      }
    },  
  };
