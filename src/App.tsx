import { motion } from 'motion/react';
import { 
  Shield, 
  Search, 
  FileText, 
  Fingerprint, 
  Database, 
  Lock, 
  Server, 
  Smartphone, 
  CheckCircle2, 
  Mail, 
  Phone,
  Scale
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#EAEAEA] selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            SolversAI
          </div>
          <div className="text-xs uppercase tracking-widest text-white/50 hidden md:block">
            Propuesta Confidencial
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 min-h-[80vh] flex flex-col justify-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
              <Scale className="w-5 h-5 text-white/50" />
              <span className="text-sm uppercase tracking-widest text-white/50">Global Business Law</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-light mb-8">
              Inteligencia <br />
              <span className="italic text-white/70">Normativa</span> Avanzada.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
              Propuesta tecnológica personalizada para José Manuel Fortuna. 
              Un ecosistema de compliance diseñado para mitigar riesgos con precisión quirúrgica.
            </motion.p>
          </motion.div>
        </section>

        {/* PAS Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6 font-light">El riesgo de la <span className="italic">incertidumbre</span>.</h2>
              <div className="space-y-6 text-white/60 font-light leading-relaxed">
                <p>
                  En el entorno legal y corporativo actual, la debida diligencia exige una revisión exhaustiva en múltiples bases de datos internacionales. Realizar este proceso de forma manual o mediante herramientas fragmentadas es ineficiente y altamente propenso a errores humanos.
                </p>
                <p>
                  Pasar por alto a un individuo sancionado o buscado internacionalmente no solo pone en riesgo la reputación intachable de Global Business Law, sino que puede desencadenar severas penalizaciones legales y financieras. Además, la gestión de identidades sin respaldo biométrico añade una capa crítica de vulnerabilidad ante suplantaciones.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10"
            >
              <h2 className="font-serif text-3xl md:text-4xl mb-6 font-light">La certeza de la <span className="italic">tecnología</span>.</h2>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                Desarrollaremos una plataforma integral y automatizada de compliance, diseñada a la medida de su firma. Consultas instantáneas, reportes automatizados y verificación biométrica, todo operando bajo los más estrictos estándares de ciberseguridad.
              </p>
              <ul className="space-y-4">
                {[
                  "Automatización de debida diligencia",
                  "Mitigación absoluta de riesgos",
                  "Optimización de tiempos operativos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Features & Databases */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Capacidades del <span className="italic">Sistema</span></h2>
            <p className="text-white/50 max-w-2xl">Arquitectura de software diseñada para la investigación profunda y la validación de identidades.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: "Investigación Personalizada",
                desc: "Búsqueda exacta por nombre y número de identificación (ID) con algoritmos de coincidencia precisa."
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Bulk Research",
                desc: "Capacidad de procesamiento masivo para consultar cientos de perfiles simultáneamente."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Reportes Automatizados",
                desc: "Generación instantánea de reportes en formato PDF con trazabilidad y sellos de tiempo."
              },
              {
                icon: <Fingerprint className="w-6 h-6" />,
                title: "Biometría Dactilar",
                desc: "Registro y validación de huellas digitales integrado en la aplicación web y móvil."
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Detección Facial",
                desc: "Reconocimiento facial avanzado con prueba de vida (liveness detection) para evitar fraudes."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Monitoreo Continuo",
                desc: "Alertas tempranas si un perfil previamente investigado ingresa a una lista de sanciones."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Databases List */}
          <div className="bg-white text-black p-8 md:p-16 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">Fuentes de <br/><span className="italic">Inteligencia</span></h3>
                <p className="text-black/70 mb-8">
                  El sistema se conectará en tiempo real con las bases de datos internacionales más críticas para el cumplimiento normativo, con capacidad de integrar fuentes adicionales según las necesidades de Global Business Law.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "OFAC/SDN (USA Treasury)",
                  "FBI Most Wanted",
                  "DEA Fugitives",
                  "Interpol (Red Notices)",
                  "EU Consolidated Sanctions",
                  "UK Financial Sanctions (OFSI)",
                  "Canada Consolidated Sanctions",
                  "UN Security Council Sanctions",
                  "Lista Engel (USA)"
                ].map((db, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></div>
                    <span className="text-sm font-medium">{db}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Lock className="w-12 h-12 mb-8 text-white/80" />
              <h2 className="font-serif text-3xl md:text-4xl mb-6 font-light">Seguridad y <span className="italic">Privacidad</span></h2>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Como firma de abogados, la confidencialidad es su activo más valioso. La arquitectura del sistema está diseñada bajo los principios de "Privacy by Design" y "Zero Trust".
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-medium text-white">Ciberseguridad de Punta</strong>
                    <span className="text-sm text-white/50">Encriptación AES-256 en reposo y TLS 1.3 en tránsito. Infraestructura aislada y dedicada.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-medium text-white">Cumplimiento Legal</strong>
                    <span className="text-sm text-white/50">Tratamiento de datos biométricos y personales alineado con las normativas locales e internacionales de protección de datos.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
              <div className="w-[80%] h-[80%] rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                  <Lock className="w-12 h-12 text-white/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Inversión <span className="italic">Tecnológica</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Precios exclusivos aplicados con un <strong className="text-white">40% de descuento (Friends & Family)</strong> para José Manuel Fortuna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 border border-white/20 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
              <h3 className="text-xl font-medium mb-2">Plataforma Web Core</h3>
              <p className="text-sm text-white/50 mb-8 h-10">Sistema web completo para investigaciones, reportes y bulk research.</p>
              
              <div className="mb-8">
                <div className="text-sm text-white/40 line-through mb-1">Desarrollo: $4,167 USD</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">$2,500</span>
                  <span className="text-sm text-white/50">USD / pago único</span>
                </div>
              </div>

              <div className="mb-8 pt-6 border-t border-white/10">
                <div className="text-sm text-white/40 line-through mb-1">Gestión Mensual: $417 USD</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light">$250</span>
                  <span className="text-sm text-white/50">USD / mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-white" /> App Web Responsiva</li>
                <li className="flex items-center gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-white" /> Conexión a BD Internacionales</li>
                <li className="flex items-center gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-white" /> Reportes PDF y Bulk Research</li>
                <li className="flex items-center gap-3 text-sm text-white/70"><CheckCircle2 className="w-4 h-4 text-white" /> Biometría vía Webcam</li>
              </ul>
            </motion.div>

            {/* Plan 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-10 bg-white text-black rounded-3xl relative overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="absolute top-6 right-6 bg-black text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                Recomendado
              </div>
              <h3 className="text-xl font-medium mb-2">Ecosistema Total</h3>
              <p className="text-sm text-black/60 mb-8 h-10">Plataforma Web + Apps Móviles Nativas (iOS & Android) para biometría avanzada.</p>
              
              <div className="mb-8">
                <div className="text-sm text-black/40 line-through mb-1">Desarrollo: $7,500 USD</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">$4,500</span>
                  <span className="text-sm text-black/60">USD / pago único</span>
                </div>
              </div>

              <div className="mb-8 pt-6 border-t border-black/10">
                <div className="text-sm text-black/40 line-through mb-1">Gestión Mensual: $583 USD</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light">$350</span>
                  <span className="text-sm text-black/60">USD / mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle2 className="w-4 h-4 text-black" /> Todo lo del plan Core</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle2 className="w-4 h-4 text-black" /> App Nativa iOS (App Store)</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle2 className="w-4 h-4 text-black" /> App Nativa Android (Play Store)</li>
                <li className="flex items-center gap-3 text-sm text-black/80"><CheckCircle2 className="w-4 h-4 text-black" /> Biometría Nativa (Huella/FaceID del dispositivo)</li>
              </ul>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto mt-16 p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="font-medium mb-2 text-sm uppercase tracking-widest">¿Qué incluye la Gestión Mensual?</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              La gestión mensual es vital para el funcionamiento ininterrumpido del sistema. Cubre los costos de infraestructura en la nube (servidores seguros), el consumo de las APIs de las bases de datos internacionales (que cobran por volumen de consulta), mantenimiento preventivo, actualizaciones de seguridad constantes y soporte técnico prioritario para su equipo.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Siguientes <span className="italic">Pasos</span></h2>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                Estamos listos para comenzar a construir el activo tecnológico que blindará las operaciones de Global Business Law. Contáctenos para agendar la reunión de kick-off y formalizar el inicio del proyecto.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <h4 className="font-medium mb-1">Valentín Flórez</h4>
                <p className="text-sm text-white/50 mb-4">Innovación y Desarrollo</p>
                <div className="space-y-2">
                  <a href="tel:+573216424600" className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors">
                    <Phone className="w-4 h-4" /> +57 321 642 4600 (Tel & WhatsApp)
                  </a>
                  <a href="mailto:valentin@solversai.com" className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" /> valentin@solversai.com
                  </a>
                </div>
              </div>

              <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <h4 className="font-medium mb-1">Valentina Valdés</h4>
                <p className="text-sm text-white/50 mb-4">Project Manager</p>
                <div className="space-y-2">
                  <a href="tel:+573113064578" className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors">
                    <Phone className="w-4 h-4" /> +57 311 306 4578 (Tel & WhatsApp)
                  </a>
                  <a href="mailto:valentina@solversai.com" className="flex items-center gap-3 text-sm hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" /> valentina@solversai.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/30 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} SolversAI. Confidencial.
      </footer>
    </div>
  );
}
