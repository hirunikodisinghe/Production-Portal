const IMAGE_BASE = "/production-portal/images/dashboards/";

export const IMAGE_PATHS = {
  general: `${IMAGE_BASE}generalM/`,
  upstream: `${IMAGE_BASE}upstream/`,
  downstream: `${IMAGE_BASE}downstream/`,
  quality: `${IMAGE_BASE}quality/`,
  planning: `${IMAGE_BASE}planning/`,
};

export const DEFAULT_IMAGE = `${IMAGE_BASE}default.png`;

const dashboards = {
  general: [],

 
//===summary dashboards======
  upstream: [
    {
      title: "Upstream DASHBOARD",
      station: "summary",
      desc: "Upstream production monitoring and process performance dashboards",
      image: `${IMAGE_PATHS.upstream}upstream.png`,
      url: "http://172.20.230.65/upstream/",
    },
  

    //===4roll calendering dashboards======



//===3roll calendering dashboards======


//===bias cutter dashboards======


//===bead-winding dashboards======


//===extruder 4" dashboards======


//===extruder 6" dashboards======



    
  ],

  // ==========================================
  // DOWNSTREAM
  // ==========================================

  downstream: [
    //====summary dashboards====
    {
      title: "CURING CONTROL CENTRE Dashboard",
      desc: "Centralized view of curing production performance and key operational metrics.",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}CP-PvsA1.png`,
      url: "http://172.20.230.65/GRIO/CP-PvsA1.php",
    },

      {
      title: "ST3 PRODUCTION SUMMARY DASHBOARD",
      desc: "Overall ST3 production performance and daily production summary report",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}ProdTrackerV1.png`,
      url: "http://172.20.230.65/GRIO/ProdTrackerV1.php",
    },


     {
      title: "DAILY PRODUCTION TRACKING DASHBOARD",
      desc: "Current month daily production tracking and performance summary report",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}DownStreamProdTrackerV4.png`,
      url: "http://172.20.230.65/grio/DownStreamProdTrackerV4.php",
    },

     {
      title: "ST3 DOWNSTREAM - PRODUCTION DASHBOARD",
      desc: "Overall dowstream production performance and operational summary report",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}ProdTracker.png`,
      url: "http://172.20.230.65/GRIO/ProdTracker.php",
    },

     {
      title: "CURING PLAN VS ACTUAL Dashboard",
      desc: "Curing production plan vs actual performance summary",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}CPPVA.png`,
      url: "http://172.20.230.65/GRIO/CPPVA.php",
    },
 

     {
      title: "ST3 -DOWNSTREAM PRODUCTION SUMMARY DASHBOARD",
      desc: "Consolidated downstream production performance summary",
      section: "summary",
      image: `${IMAGE_PATHS.downstream}DownStreamProdTrackerV2.png`,
      url: "http://172.20.230.65/grio/DownStreamProdTrackerV2.php",
    },
        //====curing dashboards====


           {
      title: "ST3 - DAILY CURING DASHBOARD",
      desc: "Daily curing production performance and operational summary",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}new.png`,
      url: "http://172.20.230.65/GRIO/new.php",
    },
  {
      title: "USER LEVEL CURING DASHBOARD",
      desc: "User level curing production performance and activity summary",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CPEmp13_v2.png`,
      url: "http://172.20.230.65/GRIO/CPEmp13_v2.php",
    },

     {
      title: "CURING SHIFT DASHBOARD",
      desc: "Shift wise curing plan vs actual production performance",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CPPVAMaster.png`,
      url: "http://172.20.230.65/GRIO/CPPVAMaster.php",
    },

    
    {
      title: "CURING SHIFT SKU DASHBOARD",
      desc: "SKU level curing plan vs actual performance by shift",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CPPVASKU6.png`,
      url: "http://172.20.230.65/GRIO/CPPVASKU6.php",
    },

    {
      title: "SHIPMENT PRIORITY SKU PLAN VS ACTUAL Dashboard",
      desc: "Shipment priority SKU plan vs actual production quantity",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CP_Ship.png`,
      url: "http://172.20.230.65/GRIO/CP_Ship.php",
    },


     {
      title: "CURING - UNIFIED CURING DASHBOARD",
      desc: "Unified shift wise view of curing production performance",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-Full.png`,
      url: "http://172.20.230.65/GRIO/Curing-Full.php",
    },

     {
      title: "ST3 CURING EXECUTIVE DASHBOARD",
      desc: "Executive overview of full day ST3 curing production summary",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-Fullday.png`,
      url: "http://172.20.230.65/GRIO/Curing-Fullday.php",
    },


    {
      title: "ST3 DAILY CURING DASHBOARD",
      desc: "Daily ST3 curing production performance summary and operational overview",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-FullDayV3.png`,
      url: "http://172.20.230.65/GRIO/Curing-FulldayV3.php",
    },

     {
      title: "ST3 DAILY CURING MANAGEMENT DASHBOARD",
      desc: "Management level daily overview of ST3 curing performance",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-FulldayV2.png`,
      url: "http://172.20.230.65/GRIO/Curing-FulldayV2.php",
    },

    {
      title: "ST3 CURING SCANNING DASHBOARD",
      desc: "Monitoring of curing scanning activity and common ID usage by operators",
      section: "curing",  
      image: `${IMAGE_PATHS.downstream}Curing-logins.png`,
      url: "http://172.20.230.65/GRIO/Curing-logins.php",
    },

     {
      title: "ST3 CURING AVAILABLE IDs DASHBOARD",
      desc: "Overview of available IDs used for curing scanning operations",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-loginsv1.png`,
      url: "http://172.20.230.65/GRIO/Curing-loginsv1.php",
    },
        
     {
      title: "ST3 - YESTERDAY CURING DASHBOARD",
      desc: "Previous day curing production performance summary",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-yesterdayv3.png`,
      url: "http://172.20.230.65/GRIO/Curing-yesterdayv3.php",
    },

    {
      title: "ST3 - PREVIOUS DAY FULL CURING DASHBOARD",
      desc: "Complete previous day curing production summary and operational overview",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}Curing-yesterdayv4.png`,
      url: "http://172.20.230.65/GRIO/Curing-yesterdayv4.php",
    },


     {
      title: "ST3 - UNIFIED CURING DASHBOARD",
      desc: "Consolidated overview of ST3 curing production performance",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CuringHV1.png`,
      url: "http://172.20.230.65/GRIO/CuringHV1.php",
    },

     {
      title: "ST3 - CURING HOURLY PRODUCTION DASHBOARD",
      desc: "Hourly monitoring of curing production performance",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CuringHourly.png`,
      url: "http://172.20.230.65/GRIO/CuringHourly.php",
    },

  

    {
      title: "ST3 - CURRENT MONTH CURING SCANNING DASHBOARD",
      desc: "Current month curing scanning activity and efficiency summary",
      section: "curing",
      image: `${IMAGE_PATHS.downstream}CurringScanning.png`,
      url: "http://172.20.230.65/grio/CurringScanning.php",
    },

   //====tbm dashboards====

    {
      title: "ST3 - TBM SHIFT DASHBOARD",
      desc: "Shift wise TBM production performance and output summary",
      section: "tbm",
      image: `${IMAGE_PATHS.downstream}tbm.png`,
      url: "http://172.20.230.65/GRIO/tbm.php",
    },

    {
      title: "ST3 - TBM PLAN VS ACTUAL DASHBOARD",
      section: "tbm",
      desc: "TBM production plan vs actual performance summary",
      image: `${IMAGE_PATHS.downstream}tbmPVsA.png`,
      url: "http://172.20.230.65/GRIO/tbmPVsA.php",
    },

    {
      title: "TBM ANALYTICS DASHBOARD",
      desc: "Detailed TBM production analytics and performance insights",
      section: "tbm",
      image: `${IMAGE_PATHS.downstream}GRI-Tbm-Data.png`,
      url: "http://172.20.230.65/GRIO/GRI-Tbm-Data.php",
    },

    {
      title: "GT STOCK AGE MASTER DASHBOARD",
      desc: "Master view of green tire stock age and inventory status",
      section: "tbm",
      image: `${IMAGE_PATHS.downstream}GTAge.png`,
      url: "http://172.20.230.65/GRIO/GTAge.php",
    },

    {
      title: "GT EXECUTIVE STOCK DASHBOARD",
      desc: "Executive overview of green tire stock levels and ageing",
      section: "tbm",
      image: `${IMAGE_PATHS.downstream}GTAge1.png`,
      url: "http://172.20.230.65/GRIO/GTAge1.php",
    },

    {
      title: "ST3 MARABGONI DASHBOARD",
      desc: "Marangoni production performance and output summary",
      section: "tbm",
      image: `${IMAGE_PATHS.downstream}MRNV1.png`,
      url: "http://172.20.230.65/GRIO/MRNV1.php",
    },


   

   
  ],

  // ==========================================
  // QUALITY
  // ==========================================

  quality: [
    {
      title: "REPAIR - TOP MANAGEMENT DASHBOARD",
      desc: "Management level overview of tire repair performance and key metrics",
      image: `${IMAGE_PATHS.quality}tr1.png`,
      url: "http://172.20.230.65/GRIO/tr1.php",
    },

    {
      title: "TIRE FINISHING REPORT DASHBOARD",
      desc: "Tire finishing performance and production reporting summary",
      image: `${IMAGE_PATHS.quality}tr2.png`,
      url: "http://172.20.230.65/GRIO/tr2.php",
    },

    {
      title: "TIRE REPAIRING DASHBOARD",
      desc: "Tire repair activity, performance and production summary",
      image: `${IMAGE_PATHS.quality}TireRepair.png`,
      url: "http://172.20.230.65/GRIO/TireRepair.php",
    },

   
  ],

  // ==========================================
  // PLANNING
  // ==========================================

  planning: [],
};

export default dashboards;