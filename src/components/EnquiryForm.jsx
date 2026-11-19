import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';

const PRODUCT_OPTIONS = [
    'Double Washing M Sand',
    'Double Washing P Sand',
    'Aggregates (jally / chips / filling materials)',
    'Fly Ash Bricks',
    'General Enquiry',
];

const STATUS = { idle: 'idle', sending: 'sending', success: 'success', error: 'error' };

export default function EnquiryForm() {
    const [status, setStatus] = useState(STATUS.idle);
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({ name: '', phone: '', email: '', product: '', message: '' });

    const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Please enter your name.';
        if (!form.phone.trim()) errs.phone = 'Please enter your phone number.';
        else if (!/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) errs.phone = 'Please enter a valid phone number.';
        if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Please enter a valid email address.';
        if (!form.product) errs.product = 'Please choose a product or requirement.';
        return errs;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus(STATUS.sending);
        try {
            await base44.entities.Enquiries.create({
                name: form.name.trim(),
                phone: form.phone.trim(),
                email: form.email.trim(),
                product: form.product,
                message: form.message.trim(),
            });
            setStatus(STATUS.success);
            setForm({ name: '', phone: '', email: '', product: '', message: '' });
        } catch (err) {
            setStatus(STATUS.error);
        }
    };

    const fieldClass = (field) =>
        `w-full rounded-xl bg-white/70 border px-4 py-3 text-[15px] text-[#111111] placeholder:text-[#2E2E2E]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/60 transition ${errors[field] ? 'border-[#111111]' : 'border-[#C9A84C]/30'
        }`;

    if (status === STATUS.success) {
        return (
            <div className="glass rounded-[2rem] p-10 text-center" role="status">
                <CheckCircle2 size={44} className="mx-auto text-[#A9863A]" aria-hidden="true" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-[#111111]">Enquiry Received</h3>
                <p className="mt-2 text-sm text-[#2E2E2E] max-w-sm mx-auto">
                    Thank you — your enquiry was saved successfully. Our team will get back to you as soon as possible.
                </p>
                <button type="button" onClick={() => setStatus(STATUS.idle)} className="btn-glass mt-6">
                    Send Another Enquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="glass rounded-[2rem] p-7 md:p-10" aria-label="Enquiry form">
            <h3 className="font-heading text-2xl font-bold text-[#111111]">Send an Enquiry</h3>
            <p className="mt-1.5 text-sm text-[#2E2E2E]">We will confirm availability, sizes and delivery for your requirement.</p>
            <p className="mt-2 text-sm text-[#2E2E2E]">
                Email:{' '}
                <a href="mailto:kumaranbluemetals63@gmail.com" className="text-[#A9863A] hover:text-[#C9A84C] transition-colors break-all">
                    kumaranbluemetals63@gmail.com
                </a>
            </p>

            {status === STATUS.error && (
                <div role="alert" className="mt-5 flex items-start gap-3 rounded-xl bg-[#E8D6B3]/40 border border-[#111111] px-4 py-3">
                    <AlertCircle size={18} className="text-[#111111] mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm text-[#111111]">
                        Your enquiry could not be saved. Please try again — or call / WhatsApp us directly so we can help right away.
                    </p>
                </div>
            )}

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                    <Label htmlFor="enq-name" className="label-caps text-[10px] text-[#2E2E2E]">Name *</Label>
                    <input id="enq-name" type="text" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'enq-name-error' : undefined} className={`mt-2 ${fieldClass('name')}`} placeholder="Your name" />
                    {errors.name && <p id="enq-name-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#111111] font-medium"><AlertCircle size={12} className="text-[#A9863A]" aria-hidden="true" />{errors.name}</p>}
                </div>
                <div>
                    <Label htmlFor="enq-phone" className="label-caps text-[10px] text-[#2E2E2E]">Phone *</Label>
                    <input id="enq-phone" type="tel" value={form.phone} onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'enq-phone-error' : undefined} className={`mt-2 ${fieldClass('phone')}`} placeholder="Your phone number" />
                    {errors.phone && <p id="enq-phone-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#111111] font-medium"><AlertCircle size={12} className="text-[#A9863A]" aria-hidden="true" />{errors.phone}</p>}
                </div>
                <div>
                    <Label htmlFor="enq-email" className="label-caps text-[10px] text-[#2E2E2E]">Email</Label>
                    <input id="enq-email" type="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'enq-email-error' : undefined} className={`mt-2 ${fieldClass('email')}`} placeholder="you@example.com (optional)" />
                    {errors.email && <p id="enq-email-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#111111] font-medium"><AlertCircle size={12} className="text-[#A9863A]" aria-hidden="true" />{errors.email}</p>}
                </div>
                <div>
                    <Label htmlFor="enq-product" className="label-caps text-[10px] text-[#2E2E2E]">Product / Requirement *</Label>
                    <select id="enq-product" value={form.product} onChange={set('product')} aria-invalid={!!errors.product} aria-describedby={errors.product ? 'enq-product-error' : undefined} className={`mt-2 ${fieldClass('product')}`}>
                        <option value="">Select an option…</option>
                        {PRODUCT_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    {errors.product && <p id="enq-product-error" role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-[#111111] font-medium"><AlertCircle size={12} className="text-[#A9863A]" aria-hidden="true" />{errors.product}</p>}
                </div>
                <div className="sm:col-span-2">
                    <Label htmlFor="enq-message" className="label-caps text-[10px] text-[#2E2E2E]">Message</Label>
                    <textarea id="enq-message" rows={4} value={form.message} onChange={set('message')} className={`mt-2 ${fieldClass('message')} resize-y`} placeholder="Tell us about your requirement — quantity, location, timeline…" />
                </div>
            </div>

            <button type="submit" disabled={status === STATUS.sending} className="btn-gold mt-8 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
                {status === STATUS.sending ? (
                    <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Sending…</>
                ) : (
                    <><Send size={15} aria-hidden="true" /> Submit Enquiry</>
                )}
            </button>
        </form>
    );
}