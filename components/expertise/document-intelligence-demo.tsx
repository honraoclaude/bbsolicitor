'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Upload, FileText } from 'lucide-react'

export function DocumentIntelligenceDemo() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzed, setAnalyzed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) {
      setFile(f)
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setAnalyzed(true)
        setIsLoading(false)
      }, 1500)
    }
  }

  const handleReset = () => {
    setFile(null)
    setAnalyzed(false)
  }

  return (
    <AnimatedSection className="bg-bg-surface rounded-lg p-8 md:p-12 shadow-card">
      {!file ? (
        <div className="text-center">
          <div className="mb-6 inline-block p-4 rounded-full bg-accent/10">
            <Upload size={32} className="text-accent" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">
            Document Intelligence Demo
          </h3>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Upload a document to see how our AI can extract key information, flag missing items, and provide a plain-English summary.
          </p>

          <label className="inline-block">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
            />
            <div className="px-8 py-4 rounded-lg bg-accent text-navy font-semibold cursor-pointer hover:bg-accent-hover transition-colors inline-block">
              Choose a File
            </div>
          </label>

          <p className="text-xs text-text-muted mt-4">
            Supported: PDF, Word, TXT (demo only — no data stored)
          </p>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin inline-block mb-4">
                <div className="w-8 h-8 border-4 border-border-hairline border-t-accent rounded-full" />
              </div>
              <p className="text-text-secondary">Analyzing document...</p>
            </div>
          ) : analyzed ? (
            <div>
              <div className="mb-6 flex items-center gap-3">
                <FileText size={24} className="text-accent" />
                <span className="font-medium text-text-primary">{file.name}</span>
              </div>

              <div className="space-y-6">
                {/* Extracted fields */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Key Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-3 rounded bg-bg-base">
                      <span className="text-text-secondary">Document Type:</span>
                      <span className="text-text-primary font-medium">Application Form</span>
                    </div>
                    <div className="flex justify-between p-3 rounded bg-bg-base">
                      <span className="text-text-secondary">Date:</span>
                      <span className="text-text-primary font-medium">15 Nov 2024</span>
                    </div>
                    <div className="flex justify-between p-3 rounded bg-bg-base">
                      <span className="text-text-secondary">Status:</span>
                      <span className="text-text-primary font-medium">Complete</span>
                    </div>
                  </div>
                </div>

                {/* Missing items */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Missing Items</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3 p-3 rounded bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <div>
                        <p className="text-red-800 dark:text-red-300 font-medium">Proof of income</p>
                        <p className="text-red-700 dark:text-red-400 text-xs">Required: bank statements (last 6 months)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Summary</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    This is a spouse visa application form dated November 2024. The applicant has provided personal details, employment history, and relationship documentation. The application is missing recent proof of household income, which is required to meet the financial requirement. Once this is provided, the application can proceed to the next stage.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-border-hairline">
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-medium hover:bg-accent/10 transition-colors"
                  >
                    Upload Another
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-accent text-navy font-semibold hover:bg-accent-hover transition-colors">
                    Speak to a Solicitor
                  </button>
                </div>

                <p className="text-xs text-text-muted text-center">
                  Demo only — no documents are stored. For a full review, book a consultation.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </AnimatedSection>
  )
}
