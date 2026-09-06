import type { FlashcardDeck } from '../types/flashcard';

export const flashcardMockData: FlashcardDeck[] = [
  {
    id: 1,
    title: "Giao tiếp hàng ngày",
    description: "Bộ từ vựng tiếng Anh cơ bản cho giao tiếp hàng ngày",
    topic: "Giao tiếp",
    level: "Beginner",
    totalCards: 40,
    learnedCards: 30,
    progress: 75,
    status: "learning",
    flashcards: [
      {
        id: 101,
        word: "Hello",
        phonetic: "/həˈləʊ/",
        meaning: "Xin chào",
        definition: "Used as a greeting or to begin a phone conversation.",
        example: "Hello, how are you?",
        exampleTranslation: "Xin chào, bạn khỏe không?",
        memoryLevel: "easy"
      },
      {
        id: 102,
        word: "Goodbye",
        phonetic: "/ˌɡʊdˈbaɪ/",
        meaning: "Tạm biệt",
        definition: "Used when someone leaves.",
        example: "Goodbye, see you tomorrow.",
        exampleTranslation: "Tạm biệt, hẹn gặp lại ngày mai.",
        memoryLevel: "easy"
      },
      {
        id: 103,
        word: "Thank you",
        phonetic: "/ˈθæŋk juː/",
        meaning: "Cảm ơn",
        definition: "A polite expression used when acknowledging a gift, service, or compliment.",
        example: "Thank you for your help.",
        exampleTranslation: "Cảm ơn bạn đã giúp đỡ.",
        memoryLevel: "normal"
      }
    ]
  },
  {
    id: 2,
    title: "Tiếng Anh công sở",
    description: "Từ vựng tiếng Anh giao tiếp nơi công sở",
    topic: "Công việc",
    level: "Intermediate",
    totalCards: 50,
    learnedCards: 21,
    progress: 42,
    status: "learning",
    flashcards: [
      {
        id: 201,
        word: "Meeting",
        phonetic: "/ˈmiːtɪŋ/",
        meaning: "Cuộc họp",
        definition: "An assembly of people for a particular purpose, especially for formal discussion.",
        example: "We have a meeting at 10 AM.",
        exampleTranslation: "Chúng ta có một cuộc họp lúc 10 giờ sáng.",
        memoryLevel: "hard"
      }
    ]
  },
  {
    id: 3,
    title: "Du lịch",
    description: "Từ vựng khi đi du lịch nước ngoài",
    topic: "Du lịch",
    level: "Beginner",
    totalCards: 35,
    learnedCards: 35,
    progress: 100,
    status: "completed",
    flashcards: [
      {
        id: 301,
        word: "Luggage",
        phonetic: "/ˈlʌɡɪdʒ/",
        meaning: "Hành lý",
        definition: "Suitcases or other bags in which to pack personal belongings for traveling.",
        example: "I need to pick up my luggage.",
        exampleTranslation: "Tôi cần lấy hành lý của mình."
      }
    ]
  },
  {
    id: 4,
    title: "Information Technology",
    description: "Từ vựng tiếng Anh trong lĩnh vực Công nghệ thông tin",
    topic: "Công nghệ",
    level: "Intermediate",
    totalCards: 60,
    learnedCards: 12,
    progress: 20,
    status: "learning",
    flashcards: [
      {
        id: 401,
        word: "Algorithm",
        phonetic: "/ˈælɡərɪðəm/",
        meaning: "Thuật toán",
        definition: "A set of instructions used to solve a problem.",
        example: "The developer designed an efficient algorithm.",
        exampleTranslation: "Lập trình viên đã thiết kế một thuật toán hiệu quả.",
        memoryLevel: "easy"
      },
      {
        id: 402,
        word: "Database",
        phonetic: "/ˈdeɪtəbeɪs/",
        meaning: "Cơ sở dữ liệu",
        definition: "A structured set of data held in a computer.",
        example: "The data is stored in the database.",
        exampleTranslation: "Dữ liệu được lưu trữ trong cơ sở dữ liệu.",
        memoryLevel: "normal"
      },
      {
        id: 403,
        word: "Deployment",
        phonetic: "/dɪˈplɔɪmənt/",
        meaning: "Triển khai",
        definition: "The action of bringing resources into effective action.",
        example: "The software deployment went smoothly.",
        exampleTranslation: "Việc triển khai phần mềm diễn ra suôn sẻ.",
        memoryLevel: "forgot"
      },
      {
        id: 404,
        word: "Framework",
        phonetic: "/ˈfreɪmwɜːrk/",
        meaning: "Khung phát triển phần mềm",
        definition: "An essential supporting structure of a building, vehicle, or object.",
        example: "We are using a new JavaScript framework.",
        exampleTranslation: "Chúng tôi đang sử dụng một khung phần mềm JavaScript mới.",
        memoryLevel: "hard"
      },
      {
        id: 405,
        word: "Authentication",
        phonetic: "/ɔːˌθentɪˈkeɪʃn/",
        meaning: "Xác thực",
        definition: "The process or action of proving or showing something to be true, genuine, or valid.",
        example: "User authentication is required.",
        exampleTranslation: "Yêu cầu xác thực người dùng.",
        memoryLevel: "hard"
      },
      {
        id: 406,
        word: "Scalability",
        phonetic: "/ˌskeɪləˈbɪləti/",
        meaning: "Khả năng mở rộng",
        definition: "The capacity to be changed in size or scale.",
        example: "Scalability is a key requirement for the system.",
        exampleTranslation: "Khả năng mở rộng là một yêu cầu chính của hệ thống."
      }
    ]
  },
  {
    id: 5,
    title: "IELTS Vocabulary",
    description: "Từ vựng luyện thi IELTS nâng cao",
    topic: "Công việc",
    level: "Advanced",
    totalCards: 80,
    learnedCards: 0,
    progress: 0,
    status: "not_started",
    flashcards: [
      {
        id: 501,
        word: "Ubiquitous",
        phonetic: "/juːˈbɪkwɪtəs/",
        meaning: "Có mặt ở khắp nơi",
        definition: "Present, appearing, or found everywhere.",
        example: "Computers are becoming increasingly ubiquitous.",
        exampleTranslation: "Máy tính đang ngày càng trở nên phổ biến ở khắp nơi."
      }
    ]
  },
  {
    id: 6,
    title: "Daily Life",
    description: "Từ vựng về cuộc sống hàng ngày",
    topic: "Giao tiếp",
    level: "Beginner",
    totalCards: 45,
    learnedCards: 0,
    progress: 0,
    status: "not_started",
    flashcards: []
  }
];
