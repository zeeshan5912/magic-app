import React, { useEffect,useState } from 'react';
import $ from 'jquery'; // Make sure you have jQuery imported
import axios from 'axios';
// import './AiTop.css';
import ImgUpload from './ImgUpload'
const AiTop = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState('');
    const [generatedImages, setGeneratedImages] = useState(() => {
        const storedImages = localStorage.getItem('generatedImages');
        return storedImages ? JSON.parse(storedImages) : [];
    });
    const [imageResolution, setImageResolution] = useState('1024x1024');
    const [artStyle, setArtStyle] = useState('Cartoon');
    const [lightingStyle, setLightingStyle] = useState('Backlight');
    const [mood, setMood] = useState('Happy');
    const [numberOfImages, setNumberOfImages] = useState(1);
    const [imageQuality, setImageQuality] = useState('hd');
    const [showModal, setShowModal] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);
    const generateImage = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        // Check if the description is empty
        if (!description.trim()) {
            // Create a div element for the alert
            const alertBox = document.createElement("div");
            alertBox.textContent = "Enter a prompt before generating an image.";
            
            // Apply styles to the alert box
            alertBox.style.position = "fixed";
            alertBox.style.bottom = "20px"; // Position at the bottom
            alertBox.style.left = "50%";
            alertBox.style.transform = "translateX(-50%)";
            alertBox.style.backgroundColor = "#ff4d4d";
            alertBox.style.color = "#fff";
            alertBox.style.padding = "15px 30px";
            alertBox.style.borderRadius = "8px";
            alertBox.style.fontSize = "16px";
            alertBox.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
            alertBox.style.zIndex = "1000";
            
            // Append the alert box to the body
            document.body.appendChild(alertBox);
            
            // Remove the alert after a delay
            setTimeout(() => {
                alertBox.remove();
            }, 3000); // Alert will disappear after 3 seconds
            
            return; // Exit the function if the prompt is empty
        }
        

        setIsLoading(true);

        const requestBody = {
            post_type: "ai_image_generator",
            image_generator: "dall-e",
            image_style: artStyle,
            image_lighting: lightingStyle,
            image_mood: mood,
            image_number_of_images: numberOfImages,
            size: imageResolution,
            quality: imageQuality,
            description: description || "make boy image",
        };

        try {
            const response = await axios.post('https://magicai.keydevsdemo.com/api/aiimage/generate-image', requestBody, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.data.status === "success") {
                const newImages = response.data.images;
                const updatedImages = [...generatedImages, ...newImages];
                setGeneratedImages(updatedImages);
            } else {
                console.error("Failed to generate image:", response.data);
            }
        } catch (err) {
            console.error('Error generating image:', err);
            if (err.response) {
                console.error('Error response data:', err.response.data);
                console.error('Error response status:', err.response.status);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        localStorage.setItem('generatedImages', JSON.stringify(generatedImages));
    }, [generatedImages]);

    // Update localStorage whenever generatedImages changes
    // const handleEyeButtonClick = (image) => {
    //     setSelectedImage(image);
    //     setShowModal(true);
    // };

    // const closeModal = () => {
    //     setShowModal(false);
    //     setSelectedImage(null);
    // };
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Function to handle eye button click
const handleEyeButtonClick = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
};

// Function to go to the previous image
const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : generatedImages.length - 1));
};

// Function to go to the next image
const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < generatedImages.length - 1 ? prevIndex + 1 : 0));
};

// Close modal function
const closeModal = () => {
    setShowModal(false);
};
    useEffect(() => {
        // DALL-E Tabs Logic
        if ($(".First-tab").length) {
            var $activeTab = $(".active-tab2");
            var $contentList = $(".tabs-content2 .list");
            var $tabsList = $(".tabs2 li");
            var activeIndex = $activeTab.index();
            $contentList.eq(activeIndex).show();

            $(".tabs2").on("click", "li", function (e) {
                var $currentTab = $(e.currentTarget);
                var index = $currentTab.index();

                $tabsList.removeClass("active-tab2");
                $currentTab.addClass("active-tab2");

                $contentList.hide().eq(index).show();
            });
        }

        // Stable Diffusion Tabs Logic
        if ($(".stableDiffusionTabs").length) {
            var $activeTab1 = $(".active-tab1");
            var $contentList1 = $(".tabs-content1 .lists");
            var $tabsList1 = $(".tabs1 li");
            var activeIndex1 = $activeTab1.index();
            $contentList1.eq(activeIndex1).show();

            $(".tabs1").on("click", "li", function (e) {
                var $currentTab1 = $(e.currentTarget);
                var index1 = $currentTab1.index();

                $tabsList1.removeClass("active-tab1");
                $currentTab1.addClass("active-tab1");

                $contentList1.hide().eq(index1).show();
            });
        }

        // Toggle Button Logic
        $(document).ready(function () {
            $('.settingTogleBtn button').on('click', function (event) {
                event.preventDefault(); // Prevent default button behavior

                var $span = $(this).find('span');
                var $settingContainer = $(this).closest('.advanceSetting').find('.settingContainer');

                // Toggle the settingContainer visibility
                $settingContainer.slideToggle();

                // Toggle the "+" and "-" text inside the span
                $span.text($span.text() === '+' ? '-' : '+');
            });
        });
    //    Add more 
    $('#addMoreBtn').on('click', function (e) {
        e.preventDefault();

        // Create the new textarea element with a delete button
        const newTextarea = $(
            '<div className="d-flex my-3"><textarea className="w-100 form-control" style="border-radius: 25px; height: 3.4em;" placeholder="Enter here..."></textarea><button className="btn btn-rounded btn-icon btn-danger delInput ms-3 my-auto"><i className="mdi mdi-delete"></i></button></div>'
        );

        // Insert the new textarea at the end of the form (just above the submit button)
        $('.textarea-container').append(newTextarea);
    });

    // Remove the textarea when delete button is clicked
    $(document).on('click', '.delInput', function (e) {
        e.preventDefault();
        $(this).parent().remove(); // Remove the div that contains the textarea and delete button
    });

        // Clean up event listeners on unmount
        return () => {
            $(".tabs2").off("click");
            $(".tabs1").off("click");
            $('.settingTogleBtn button').off("click");
            $('#addMoreBtn').off('click');
            $(document).off('click', '.delInput');
        };
    }, []);
    return (
        <>
            <div className="card" style={{ backgroundColor: 'rgba(172, 57, 212, 0.2)' }}>
                <div className="card-body">
                    <div className="First-tab">
                        <ul className="tabs2 px-0">
                            <li className="active-tab2">DALL-E</li>
                            <li>Stable Diffusion</li>
                            <li>Flux Pro</li>
                        </ul>

                        <div className="tabs-content2">
                        <div className="list">
                        <h4 className="fw-bolder">Explain your idea. | 
                <a href="/" className="text-success" >Generate example prompt</a>
                <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#promptLibrary">
                    <i className="mdi mdi-file-document-box fs-3"></i>
                </button>
                <div className="modal fade" id="promptLibrary" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </h4>
            <form onSubmit={generateImage}>
                <div className="w-100" style={{ position: 'relative' }}>
                    <textarea 
                        className="w-100 form-control" 
                        style={{ borderRadius: '25px', height: '3.4em' }} 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Enter here..."
                    />
                    <button
                        className="btn btn-primary"
                        style={{ borderRadius: '25px', padding: '0.8em 1.5em', position: 'absolute', top: '10%', right: '1%' }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            "Generate"
                        )}
                    </button>
                </div>

                <div className="advanceSetting pt-4">
                    <div className="settingTogleBtn">
                        <button type="button" className="btn p-0 d-flex align-items-center">
                            <div className="mx-2">Advanced Settings</div> 
                            <span className="bg-white fs-3" style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                        </button>
                    </div>
                    <div className="settingContainer">
                        <div className="row">
                            <div className="col-lg-2">
                                <label className="form-label">Image resolution</label>
                                <select className="form-select" onChange={(e) => setImageResolution(e.target.value)}>
                                    <option value="1024x1024">1024x1024</option>
                                    <option value="512x512">512x512</option>
                                    <option value="256x256">256x256</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <label className="form-label">Art Style</label>
                                 <select className="form-select" onChange={(e) => setArtStyle(e.target.value)}>
                                    <option value="Cartoon">Cartoon</option>
                                    <option value="Realistic">Realistic</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <label className="form-label">Lighting Style</label>
                                <select className="form-select" onChange={(e) => setLightingStyle(e.target.value)}>
                                    <option value="Backlight">Backlight</option>
                                    <option value="Frontlight">Frontlight</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <label className="form-label">Mood</label>
                                <select className="form-select" onChange={(e) => setMood(e.target.value)}>
                                    <option value="Happy">Happy</option>
                                    <option value="Angry">Angry</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <label className="form-label">Number of Images</label>
                                <select className="form-select" onChange={(e) => setNumberOfImages(parseInt(e.target.value))}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <label className="form-label">Quality of Images</label>
                                <select className="form-select" onChange={(e) => setImageQuality(e.target.value)}>
                                    <option value="HD">HD</option>
                                    <option value="Standard">Standard</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>

                            <div className="list">
                                <div className="ak-section-heading ak-style-1 ak-type-1">
                                    <div className="stableDiffusionTabs">
                                        <div className="w-100 d-flex justify-content-center mb-2">
                                            <ul className="tabs1 px-0 mt-2 row row-cols-2 row-cols-lg-4">
                                                <li className="col active-tab1">Text-to-Image</li>
                                                <li className="col">Image-to-Image</li>
                                                <li className="col">Upscaling</li>
                                                <li className="col">Multi-Prompting</li>
                                            </ul>
                                        </div>

                                        <div className="tabs-content1">
                                            <div className="lists">
                                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                                    className="text-success">Generate example prompt</a>
                                                    <button type="button" className="btn p-0"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#promptLibrary">
                                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                                    </button>

                                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                                        aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title"
                                                                        id="exampleModalLabel">Modal
                                                                        title</h5>
                                                                    <button type="button" className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Close</button>
                                                                    <button type="button"
                                                                        className="btn btn-primary">Save
                                                                        changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </h4>
                                                <form action="">
                                                    <div className="w-100" style={{ position: 'relative' }}>
                                                        <textarea className="w-100 form-control"
                                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                                            name="" id=""
                                                            placeholder="Enter here..."></textarea>
                                                        <button className="btn btn-primary "
                                                            style={{ borderRadius: '25px', padding: '0.8em 1.5em', position: 'absolute', top: '10%', right: '1%' }}>Generate</button>
                                                    </div>

                                                    <div className="advanceSetting pt-4">
                                                        <div className="settingTogleBtn">
                                                            <button
                                                                className="btn p-0 d-flex align-items-center">
                                                                <div className="mx-2">Advanced Settings</div>
                                                                <span className="bg-white fs-3"
                                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                                            </button>
                                                        </div>
                                                        <div className="settingContainer">
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Image
                                                                        resolution</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Art
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Lightning
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Mood</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Number of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Quality of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="lists">
                                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                                    className="text-success">Generate example prompt</a>
                                                    <button type="button" className="btn p-0"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#promptLibrary">
                                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                                    </button>

                                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                                        aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title"
                                                                        id="exampleModalLabel">Modal
                                                                        title</h5>
                                                                    <button type="button" className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Close</button>
                                                                    <button type="button"
                                                                        className="btn btn-primary">Save
                                                                        changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </h4>
                                                <form action="">
                                                    <div className="w-100" style={{ position: 'relative' }}>
                                                        <textarea className="w-100 form-control"
                                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                                            name="" id=""
                                                            placeholder="Enter here..."></textarea>
                                                    </div>
                                                    <div className="w-100 my-3">
                                                        <h4 className="fw-bolder">Upload Image</h4>
                                                    </div>
                                                    <ImgUpload/>
                                                    <div className="w-100">
                                                        <div id="ImgUpload"></div>
                                                    </div>
                                                    <div className="w-100 my-3">
                                                        <button className="btn btn-primary w-100"
                                                            style={{ borderRadius: '25px' }}>Generate</button>
                                                    </div>

                                                    <div className="advanceSetting pt-4">
                                                        <div className="settingTogleBtn">
                                                            <button
                                                                className="btn p-0 d-flex align-items-center">
                                                                <div className="mx-2">Advanced Settings</div>
                                                                <span className="bg-white fs-3"
                                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                                            </button>
                                                        </div>
                                                        <div className="settingContainer">
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Image
                                                                        resolution</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Art
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Lightning
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Mood</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Number of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Quality of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="lists">

                                                <form action="">

                                                    <div className="w-100 my-3">
                                                        <h4 className="fw-bolder">Upload Image</h4>
                                                    </div>
                                                    <ImgUpload/>
                                                    <div className="w-100">
                                                        <div id="OnlyImgUpload"></div>
                                                    </div>
                                                    <div className="w-100 my-3">
                                                        <button className="btn btn-primary w-100"
                                                            style={{ borderRadius: '25px' }}>Generate</button>
                                                    </div>

                                                    <div className="advanceSetting pt-4">
                                                        <div className="settingTogleBtn">
                                                            <button
                                                                className="btn p-0 d-flex align-items-center">
                                                                <div className="mx-2">Advanced Settings</div>
                                                                <span className="bg-white fs-3"
                                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                                            </button>
                                                        </div>
                                                        <div className="settingContainer">
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Image
                                                                        resolution</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Art
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Lightning
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Mood</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Number of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Quality of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                            <div className="lists">
                                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                                    className="text-success">Generate example prompt</a>
                                                    <button type="button" className="btn p-0"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#promptLibrary">
                                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                                    </button>

                                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                                        aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title"
                                                                        id="exampleModalLabel">Modal
                                                                        title</h5>
                                                                    <button type="button" className="btn-close"
                                                                        data-bs-dismiss="modal"
                                                                        aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button"
                                                                        className="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Close</button>
                                                                    <button type="button"
                                                                        className="btn btn-primary">Save
                                                                        changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </h4>
                                                <form >
                                                    <div className="w-100 textarea-container" style={{ position: 'relative' }}                                                                >
                                                        <textarea className="w-100 form-control"
                                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                                            name="" id=""
                                                            placeholder="Enter here..."></textarea>
                                                    </div>
                                                    <div className="w-100 my-3">
                                                        <button id="addMoreBtn" className="btn d-flex align-items-center bg-white" style={{ borderRadius: '25px', padding: '0.5em 1em' }}                                                                    >
                                                            <i className="mdi mdi-plus"></i> <span className="fw-bolder">Add More</span>
                                                        </button>
                                                    </div>

                                                    <div className="w-100 my-3">
                                                        <button type="submit" className="btn btn-primary w-100"
                                                            style={{ borderRadius: '25px', padding: '0.8em 1.5em' }}>Generate</button>
                                                    </div>

                                                    <div className="advanceSetting pt-4">
                                                        <div className="settingTogleBtn">
                                                            <button
                                                                className="btn p-0 d-flex align-items-center">
                                                                <div className="mx-2">Advanced Settings</div>
                                                                <span className="bg-white fs-3"
                                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                                            </button>
                                                        </div>
                                                        <div className="settingContainer">
                                                            <div className="row">
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Image
                                                                        resolution</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Art
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Lightning
                                                                        Style</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>

                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Mood</label>
                                                                    <select className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Number of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-lg-2">
                                                                    <label className="form-label">Quality of
                                                                        Images</label>
                                                                    <select id="inputState"
                                                                        className="form-select">
                                                                        <option selected>Choose...</option>
                                                                        <option>...</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list">
                                <h4 className="fw-bolder">Explain your idea. | <a href="/"
                                    className="text-success">Generate example prompt</a>
                                    <button type="button" className="btn p-0" data-bs-toggle="modal"
                                        data-bs-target="#promptLibrary">
                                        <i className="mdi mdi-file-document-box fs-3"></i>
                                    </button>

                                    <div className="modal fade" id="promptLibrary" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Modal
                                                        title</h5>
                                                    <button type="button" className="btn-close"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    ...
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary"
                                                        data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save
                                                        changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </h4>
                                <form action="">
                                    <div className="w-100" style={{ position: 'relative' }}                                                >
                                        <textarea className="w-100 form-control"
                                            style={{ borderRadius: '25px', height: '3.4em' }}
                                            name="" id=""
                                            placeholder="Enter here..."></textarea>
                                        <button className="btn btn-primary "
                                            style={{ borderRadius: '25px', padding: '0.8em 1.5em', position: 'absolute', top: '10%', right: '1%' }}>Generate</button>
                                    </div>

                                    <div className="advanceSetting pt-4">
                                        <div className="settingTogleBtn">
                                            <button className="btn p-0 d-flex align-items-center">
                                                <div className="mx-2">Advanced Settings</div> <span
                                                    className="bg-white fs-3"
                                                    style={{ borderRadius: '50%', padding: '4px 12px' }}>+</span>
                                            </button>
                                        </div>
                                        <div className="settingContainer">
                                            <div className="row">
                                                <div className="col-lg-2">
                                                    <label className="form-label">Image resolution</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Art Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Lightning Style</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>

                                                <div className="col-lg-2">
                                                    <label className="form-label">Mood</label>
                                                    <select className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Number of Images</label>
                                                    <select id="inputState" className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-2">
                                                    <label className="form-label">Quality of Images</label>
                                                    <select id="inputState" className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            {/* Results Section */}
      
                        </div>
                    </div>
                </div>
            </div>
            {/* Results Section */}
            {generatedImages.length > 0 && (
    <div className="results mt-5">
        <h3 style={{ fontWeight: 900 }}>Results</h3>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 mt-4">
            {generatedImages.map((image, index) => (
                <div className="col" key={image.id || index}>
                    <div className="card mb-3">
                        <div className="imgContainer w-100 overflow-hidden">
                            <img src={image.output} className="img-fluid" alt={image.title || "Generated Image"} />
                            <div className="imgButton">
                                <button className="imgbtn imgClose bg-white mb-2">
                                    <i className="mdi mdi-close"></i>
                                </button>
                                <button className="imgbtn bg-white mb-2" onClick={() => handleEyeButtonClick(index)}>
                                    <i className="mdi mdi-eye"></i>
                                </button>
                                <button className="imgbtn bg-white mb-2">
                                    <i className="mdi mdi-download"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body px-1 py-3">
                            <h6 className="card-title fs-6 mb-0">{image.title || "Generated Image"}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)}

{showModal && (
    <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Image Preview</h5>
                    <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body text-center">
                    <img src={generatedImages[currentImageIndex].output} className="img-fluid" alt="Preview" />
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handlePreviousImage}>
                        <i className="mdi mdi-arrow-left"></i> 
                    </button>
                    <button className="btn btn-primary" onClick={handleNextImage}>
                         <i className="mdi mdi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
)}
        </>
    )
}

export default AiTop
