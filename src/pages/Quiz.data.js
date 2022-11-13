import school1 from '../assets/images/quizBackground/school1.png';
import school2 from '../assets/images/quizBackground/school2.jpeg';
import minhhoa1 from '../assets/images/minhhoa1.jpg';
import VNFlag from '../assets/images/flags/vietnam-flag.jpg';
import ENFlag from '../assets/images/flags/english-flag.jpg';
import FRFlag from '../assets/images/flags/french-flag.png';

import { FLOATING_BOX_COLOR } from 'src/theme/color';

import audio1 from '../assets/mp3-test/voice1.mp3';
import audio2 from '../assets/mp3-test/voice2.mp3';

import video1 from '../assets/video-test/movie.mp4';
import video2 from '../assets/video-test/cat.mp4';

const OPACITY = {
    LOW: 0.3,
    MEDIUM: 0.6,
    HIGH: 0.6
}

export const quizList = [
    {
        id: 1,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school1,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Phụ âm đầu của tiếng \"Mẹ\" là gì ?",
        questionImageUrl: minhhoa1,
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 25,
        type: "mc_quiz",
        quizParts: [
            {
                content: {
                    text: "e",
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: false,
                }
            },
            {
                content: {
                    text: "m",
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: true,
                }
            },
            {
                content: {
                    text: "me",
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: false,
                }
            },
            {
                content: {
                    text: "mẹ",
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: false,
                }
            }
        ]
    },
    {
        id: 2,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school2,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Quốc kỳ Việt Nam ?",
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 25,
        type: "mc_quiz",
        quizParts: [
            {
                content: {
                    imageUrl: VNFlag
                },
                mcQuizParts: {
                    correctness: true
                }
            },
            {
                content: {
                    imageUrl: ENFlag
                },
                mcQuizParts: {
                    correctness: false
                }
            },
            {
                content: {
                    imageUrl: FRFlag
                },
                mcQuizParts: {
                    correctness: false
                }
            },
        ]
    },
    {
        id: 3,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school1,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Hãy chọn những tiếng có phụ âm đầu",
        questionImageUrl: minhhoa1,
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 30,
        type: "mc_quiz",
        quizParts: [
            {
                content: {
                    rateVoice: 1,
                    voice: "Hương Giang",
                    audioUrl: audio1
                },
                mcQuizParts: {
                    correctness: false,
                }
            },
            {
                content: {
                    audioUrl: audio2,
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: true
                }
            },
            {
                content: {
                    audioUrl: audio1,
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: true
                }
            },
        ]
    },
    {
        id: 4,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school2,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Hãy chọn những tiếng có phụ âm đầu",
        questionImageUrl: minhhoa1,
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 30,
        type: "mc_quiz",
        quizParts: [
            {
                content: {
                    rateVoice: 1,
                    voice: "Hương Giang",
                    videoUrl: video1
                },
                mcQuizParts: {
                    correctness: false,
                }
            },
            {
                content: {
                    videoUrl: video2,
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: false
                }
            },
            {
                content: {
                    videoUrl: video1,
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: true
                }
            },
            {
                content: {
                    videoUrl: video2,
                    rateVoice: 1,
                    voice: "Hương Giang"
                },
                mcQuizParts: {
                    correctness: true
                }
            },
        ]
    },
]

// text: "Thanh hỏi",
// text: "Thanh ngã",
// text: "Thanh sắc",