# 🤖 AI Chatbot Backend

<div align="center">

  <h1>Welcome to the AI Chatbot Backend</h1>
  <p>Powered by Spring Boot and Google Gemini AI</p>
</div>

## 🚀 Overview
Transform your applications with our intelligent chatbot backend! This powerful Spring Boot application leverages Google's cutting-edge Gemini AI to deliver human-like conversations through a simple yet robust API. Whether you're building a customer support system, a virtual assistant, or an interactive FAQ bot, this backend has you covered.

## ✨ Key Features

### 🎯 Core Capabilities
- **🤖 AI-Powered Conversations**: Seamless integration with Google's Gemini AI for natural, contextual responses
- **⚡ Blazing Fast**: Optimized for low-latency responses using Spring's reactive programming model
- **🔒 Secure**: Built with security best practices in mind

### 🛠️ Developer Experience
- **📚 Clean API**: Intuitive REST endpoints with comprehensive documentation
- **🔌 Easy Integration**: Simple JSON-based request/response format
- **🔧 Configurable**: Customize behavior through application properties

### 🌐 Scalability
- **📈 Horizontal Scaling**: Stateless design allows for easy scaling
- **⚖️ Load Balancing**: Ready for production deployment with load balancing
- **🌍 Multi-region Support**: Deploy anywhere with minimal configuration

## 🚀 Quick Start

### Send Your First Message
```bash
curl -X POST \
  http://localhost:8080/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"prompt": "Hello, how are you today?"}'
```

### 📡 API Endpoints

#### 💬 Chat with the AI
```http
POST /api/chat
Content-Type: application/json

{
  "prompt": "What's the weather like today?"
}
```

**Example Response**:
```json
{
  "response": "I'm an AI and don't have real-time weather data, but I can help you find it! Would you like me to search the web for current weather information in your location?"
}
```

### 🎭 Conversation Context
Maintain context in conversations by including previous messages:
```json
{
  "messages": [
    {"role": "user", "content": "What's the capital of France?"},
    {"role": "assistant", "content": "The capital of France is Paris."},
    {"role": "user", "content": "What about Germany?"}
  ]
}
```

## ⚙️ Configuration

### 🔑 Required Environment Variables
```bash
# Google Gemini API Key (Required)
GEMINI_API_KEY=your-gemini-api-key-here

# Optional: Set the server port (default: 8080)
SERVER_PORT=8080

# Optional: Configure CORS (comma-separated origins)
CORS_ALLOWED_ORIGINS=http://localhost:5173,https://yourapp.com
```

### 🔧 Application Properties
Customize your chatbot's behavior by adding these to `application.properties`:

```properties
# Server Configuration
server.port=${SERVER_PORT:8080}

# CORS Configuration
spring.web.cors.allowed-origins=${CORS_ALLOWED_ORIGINS:http://localhost:5173}
spring.web.cors.allowed-methods=GET,POST,OPTIONS
spring.web.cors.allowed-headers=*

# AI Model Configuration
gemini.model=gemini-2.0-flash
gemini.temperature=0.7
gemini.max-tokens=1000
```

## 🧩 Tech Stack

### Backend
- **Spring Boot 3.5.4** - Robust Java framework
- **Spring AI** - For Gemini AI integration
- **Lombok** - Cleaner code with less boilerplate

### Development Tools
- **Spring Boot DevTools** - Faster development cycles
- **Maven** - Dependency management
- **JUnit 5** - Comprehensive testing

### Performance
- **Caffeine Cache** - Response caching
- **Actuator** - Production monitoring
- **Micrometer** - Application metrics

## 🛠️ Development Guide

### 🚀 Getting Started
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/chatbot-backend.git
   cd chatbot-backend
   ```

2. **Set up your environment**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Edit with your API key
   nano .env
   ```

3. **Run locally**
   ```bash
   # Development mode with hot-reload
   mvn spring-boot:run
   ```

### 🏗️ Building for Production
```bash
# Build the JAR
mvn clean package -DskipTests

# Run the application
java -jar target/chatbot-0.0.1-SNAPSHOT.jar

# Or with custom config
java -DGEMINI_API_KEY=your-key -jar target/chatbot-0.0.1-SNAPSHOT.jar
```

### 🧪 Testing
```bash
# Run all tests
mvn test

# Run a specific test
mvn test -Dtest=ChatControllerTest
```

## 📁 Project Structure

```
chatbot/
├── src/
│   ├── main/
│   │   ├── java/com/chatBot/chatbot/
│   │   │   ├── config/           # Configuration and security
│   │   │   │   ├── WebConfig.java
│   │   │   │   └── AIConfig.java
│   │   │   │
│   │   │   ├── controller/       # REST API endpoints
│   │   │   │   └── ChatController.java
│   │   │   │
│   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── ChatRequest.java
│   │   │   │   └── ChatResponse.java
│   │   │   │
│   │   │   ├── service/         # Business logic
│   │   │   │   └── ChatService.java
│   │   │   │
│   │   │   └── ChatbotApplication.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties
│   │       └── application-dev.properties
│   │
│   └── test/                    # Test files
│
├── .env.example                # Example environment variables
├── pom.xml                    # Maven configuration
└── README.md                  # Project documentation
```

## 🚨 Troubleshooting

### Common Issues & Solutions

#### 🔑 API Key Not Working
```
Error: 401 Unauthorized - Invalid API Key
```
✅ **Solution**:
1. Verify your Gemini API key is set in `.env`
2. Ensure the key has proper permissions
3. Check for extra spaces or special characters

#### 🌐 CORS Errors
```
Access to fetch at 'http://localhost:8080/api/chat' from origin 'http://localhost:3000' has been blocked by CORS policy
```
✅ **Solution**:
1. Add your frontend URL to `CORS_ALLOWED_ORIGINS`
2. Ensure the protocol (http/https) matches
3. Clear browser cache after CORS changes

#### 🐛 Dependency Issues
```
[ERROR] Failed to execute goal on project chatbot: Could not resolve dependencies
```
✅ **Solution**:
```bash
# Clean and rebuild
mvn clean install -U

# If using a proxy
mvn -DproxySet=true -DproxyHost=your-proxy -DproxyPort=8080 clean install
```

### 🚦 Performance Issues
- **High Latency**: Enable response caching
- **Memory Leaks**: Monitor with Spring Boot Actuator
- **Timeouts**: Adjust timeout settings in `application.properties`

## 📚 Additional Resources

### 📖 Documentation
- [Spring Boot Reference](https://spring.io/projects/spring-boot)
- [Spring AI Documentation](https://spring.io/projects/spring-ai)
- [Google Gemini API Docs](https://ai.google.dev/)

### 🎓 Learning Resources
- [Spring Boot Guides](https://spring.io/guides)
- [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
- [Spring AI Examples](https://github.com/spring-projects/spring-ai/tree/main/examples)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Spring Boot
- Powered by Google's Gemini AI


---

<div align="center">
  Made with 💻 & ☕ by Your Team
</div>
