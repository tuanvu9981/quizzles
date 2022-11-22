import school1 from '../../../assets/images/quizBackground/school1.png';
import school2 from '../../../assets/images/quizBackground/school2.jpeg';
import minhhoa1 from '../../../assets/images/minhhoa1.jpg';

import { FLOATING_BOX_COLOR } from 'src/theme/color';

import audio1 from '../../../assets/mp3-test/voice1.mp3';
import audio2 from '../../../assets/mp3-test/voice2.mp3';

import video1 from '../../../assets/video-test/movie.mp4';
import video2 from '../../../assets/video-test/cat.mp4';

import moonImg from '../../../assets/images/moon.jpg';
import mountainImg from '../../../assets/images/mountain.jpg';
import starImg from '../../../assets/images/star.jpeg';

const OPACITY = {
    LOW: 0.3,
    MEDIUM: 0.6,
    HIGH: 0.6
}

export const pairQuizList = [
    {
        id: 1,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school1,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Nối các từ với phát âm của chúng sao cho đúng",
        questionImageUrl: minhhoa1,
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 30,
        type: "pair_quiz",
        quizParts: [
            {
                content: {
                    text: "cá vàng",
                },
                pairQuizParts: {
                    pairContent: {
                        audioUrl: audio1,
                    }
                }
            },
            {
                content: {
                    text: "xe máy",
                },
                pairQuizParts: {
                    pairContent: {
                        audioUrl: audio2,
                    }
                }
            },
            {
                content: {
                    text: "bánh quy",
                },
                pairQuizParts: {
                    pairContent: {
                        audioUrl: audio1,
                    }
                }
            },
        ]
    },
    {
        id: 2,
        inTestBank: false,
        title: 'Câu hỏi cho trẻ em lớp 1',
        backgroundUrl: school2,
        backgroundOpacity: OPACITY.MEDIUM,
        textBackgroundColor: FLOATING_BOX_COLOR,
        question: "Nối các từ với hình ảnh của chúng sao cho đúng",
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 35,
        type: "pair_quiz",
        quizParts: [
            {
                content: {
                    text: "trăng"
                },
                pairQuizParts: {
                    pairContent: {
                        imageUrl: moonImg,
                    }
                }
            },
            {
                content: {
                    text: "sao"
                },
                pairQuizParts: {
                    pairContent: {
                        imageUrl: starImg
                    }
                }
            },
            {
                content: {
                    text: "núi"
                },
                pairQuizParts: {
                    pairContent: {
                        imageUrl: mountainImg,
                    }
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
        question: "Hãy chọn chữ viết chỉ loài vật tương ứng với hình ảnh trong video",
        questionImageUrl: minhhoa1,
        voice: "Hương Giang",
        rateVoice: 1.5,
        score: 30,
        type: "pair_quiz",
        quizParts: [
            {
                content: {
                    text: "mèo"
                },
                pairQuizParts: {
                    pairContent: {
                        videoUrl: video2,
                    }
                }
            },
            {
                content: {
                    text: "gấu"
                },
                pairQuizParts: {
                    pairContent: {
                        videoUrl: video1,
                    }
                }
            },
            {
                content: {
                    text: "chim"
                },
                pairQuizParts: {
                    pairContent: {
                        videoUrl: video1,
                    }
                }
            },
        ]
    },
]