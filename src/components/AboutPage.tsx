import React, { useState } from 'react';
import { Mail, Send, Heart, Zap, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for contact form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}ThreadDrop
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            ThreadDrop uses AI to help people wear what they feel. Whether it's a quote, a mood, 
            or an image in your mind — we bring it to life on a shirt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Heart className="h-6 w-6 mr-3 text-purple-400" />
                Our Story
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  ThreadDrop was born from a simple idea: everyone has something unique to express, 
                  but not everyone has the design skills to bring their vision to life.
                </p>
                <p>
                  We believe that clothing is more than just fabric—it's a canvas for self-expression, 
                  a way to share your mood, your beliefs, and your personality with the world.
                </p>
                <p>
                  By combining the power of artificial intelligence with human creativity, we've created 
                  a platform that democratizes design, making it possible for anyone to create something 
                  beautiful and meaningful.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <Zap className="h-6 w-6 mr-3 text-purple-400" />
                Our Mission
              </h2>
              <p className="text-white/80 leading-relaxed">
                To empower everyone to wear their feelings, express their thoughts, and share their 
                unique perspective with the world through beautifully designed, AI-generated apparel 
                that tells their story.
              </p>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Why Choose ThreadDrop?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">AI-Powered Creativity</h3>
                    <p className="text-white/70 text-sm">
                      Our advanced AI understands context, mood, and style to create designs that truly represent you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
                    <p className="text-white/70 text-sm">
                      High-quality materials and printing ensure your designs look great and last long.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Community Driven</h3>
                    <p className="text-white/70 text-sm">
                      Join a community of creators who believe in the power of personal expression.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-white/60 text-sm">Designs Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">5K+</div>
                <div className="text-white/60 text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-white/60 text-sm">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-1">99%</div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center flex items-center justify-center">
              <Mail className="h-6 w-6 mr-3 text-purple-400" />
              Get In Touch
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p className="text-white/60 mb-2">Or reach us directly:</p>
              <a 
                href="mailto:hello@threaddrop.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                threaddrop@zohomail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
