import React from 'react'

const AiSpeechContent = () => {
  return (
    <>
            <div class="content-wrapper" style={{ backgroundColor: 'white' }}>
                        <div class="row">
                            <div class="col-12 mb-4">
                                <a href="/" class="btn p-0"><span class="d-flex align-items-center"><i
                                            class="mdi mdi-chevron-left fs-5"></i> Back to dashboard</span></a>
                            </div>
                        </div>

                        <div class="row pb-2" style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>
                            <div class="col-lg-6">
                                <h3 style={{ fontWeight: 900 }}>AI Speech to Text</h3>
                                <p>The AI app that turns audio speech into text with ease.</p>
                            </div>

                            <div class="col-lg-6 aimg">
                                <div class="d-flex justify-content-center justify-content-lg-end">
                                    <a href="/" class="btn bg-white mx-2"
                                       style={{ borderBottom: '1px solid rgb(207, 206, 206)' }}>My Documents</a>
                                    <a href="/" class="btn btn-primary"><span class="d-flex align-items-center"><i
                                                class="mdi mdi-plus me-3"></i> New</span></a>
                                </div>
                            </div>
                        </div>


                        <div class="topic">
                            <div class="row pt-5">
                                <div class="col-lg-4">
                                    <form action="" class="row">
                                    
                                    <div class="col-12">               
                                            <div id="AudioUploadForAiToConvert"></div>  
                                    </div>
                                        
                                        <div class="col-12 mb-3">
                                            <button type="submit"
                                                class="btn btn-primary w-100 text-center mt-3">Generate</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="col-lg-8 px-1 px-lg-5 ">
                                    <div class="HeadLeft">
                                        <div class="d-flex align-items-center w-100">
                                            <div class="audio-player">
                                                <div class="play-btn">
                                                    <i class="mdi mdi-play-circle-outline play-icon"></i>
                                                    <i class="mdi mdi-pause-circle-outline pause-icon"></i>
                                                </div>
                                                <div id="waveform"></div>
                                                <span class="current-time">0:00</span>/
                                                <span class="duration">0:00</span>
                                            </div>
                                            
                                            <audio id="audio" preload="metadata">
                                                <source src="images/Aaj.mp3" type="audio"/>
                                                Your browser does not support the audio element.
                                            </audio>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-download"></i>
                                            </button>
                                            <button class="btn p-1 mx-1">
                                                <i class="mdi mdi-minus-circle-outline text-danger"></i>
                                            </button>
                                        </div>
                                        
                                    </div>

                                    <div class="my-4 px-4">
                                        Hi, this is Daniel calling from Warranty Services on a recorded line. How are you doing today? Well, this call is about home warranty and we are just reaching out to the homeowners here. Well, this call is about the home warranty and we are just reaching out to the homeowners here. So just want to confirm, are you a homeowner? Great, well this call is about home warranty coverage plan which covers all your operating system and appliances in your home for full repairs and replacements if anything breaks down due to normal wear and tear. It can save you a lot of money, time and hassle which you go through any time if anything stops working. And right now we are just providing you the information only on this plan so I just want to confirm, how do you pronounce your first and last name? Do you make decisions about your house? What is your 5 digit zip code? What type of home do you own, single family, condominium, multi-family, duplex or townhouse? Thank you for sharing your information. Thank you Josh for sharing your information. I'll now hand you over to one of my licensed agents who can provide you with the further information about your home protection plan options, pricing and any other queries you might have. Please wait a second.
                                    </div>
                                    <div class="oaie">
                                        <a href='/' class="btn w-100">Open an AI Editor</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default AiSpeechContent
