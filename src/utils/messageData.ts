export interface Message {
  id: string;
  senderName: string;
  senderImage: any;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  isOnline?: boolean;
}

export const mockMessages: Message[] = [
  {
    id: "1",
    senderName: "John Smith",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "Hey, how are you doing?",
    timestamp: "10:45 AM",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: "2",
    senderName: "Sarah Johnson",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "The job is completed successfully!",
    timestamp: "9:30 AM",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "3",
    senderName: "Mike Wilson",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "Can you help me with plumbing?",
    timestamp: "Yesterday",
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: "4",
    senderName: "Emily Davis",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "Thanks for the great service!",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "5",
    senderName: "David Brown",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "When can you start the painting job?",
    timestamp: "2 days ago",
    unreadCount: 3,
    isOnline: true,
  },
  {
    id: "6",
    senderName: "Lisa Anderson",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "The electrical work looks perfect!",
    timestamp: "3 days ago",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "7",
    senderName: "Robert Taylor",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "Do you do roof repairs?",
    timestamp: "1 week ago",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "8",
    senderName: "Jennifer Lee",
    senderImage: require("../assets/mock_image.jpg"),
    lastMessage: "Can you come tomorrow for cleaning?",
    timestamp: "1 week ago",
    unreadCount: 1,
    isOnline: true,
  },
];
